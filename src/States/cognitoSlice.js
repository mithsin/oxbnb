import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';
// import AWS from 'aws-sdk';
import { setIsSignInState, updateUserInitState, setUerName, setLoginInitialState } from './userSlice';
// import { mockUser1 } from '../mockData';
// AWS Setup
const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL,
    ClientId: process.env.REACT_APP_CLIENT_ID
};
const postURL = process.env.REACT_APP_API_GATEWAY_URL;
const userPool = new CognitoUserPool(poolData);
// const cognitoUserState = userPool.getCurrentUser();

export const cognitoSlice = createSlice({
    name: 'cognitoState',
    initialState: {
        accessToken: '',
        idToken: '',
        errorMessage: '',
        cognitoUserInfo: {}
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },
        setCognitoUserInfo: (state, action) => {
            state.cognitoUserInfo = action.payload;
        },
    },
});
 
export const {
    setIdToken, setAccessToken, setCognitoUserInfo
} = cognitoSlice.actions;

// AWS Cognito Get User Data
export const userLoginCheck = () => dispatch => {
    if (userPool.getCurrentUser() != null) {
        userPool.getCurrentUser().getSession((err, session) => {
            if(err){console.log('userPool.getCurrentUser() err---->', err)};
            const idToken = session?.getIdToken().getJwtToken();
            dispatch(setIdToken(idToken))
            dispatch(updateUserInitState(userPool.getCurrentUser().username, idToken))
            dispatch(setIsSignInState(true))
          });
    } 
};

// AWS User Login
export const userLogin = ({userName, password, history}) => dispatch => {
    const authenticationData = {
        Username: userName,
        Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(
        authenticationData
    );

    const userData = {
        Username: userName,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            dispatch(setIdToken(result.idToken.jwtToken));
            dispatch(setUerName(result.accessToken.payload.username));
            dispatch(setIsSignInState(true));
            dispatch(updateUserInitState(result.accessToken.payload.username, result.idToken.jwtToken))
            history.push('/');
         },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        },
    });
};

// AWS cognito Logout
export const userLogout = ({history}) => dispatch => {
    if(userPool.getCurrentUser()){
        dispatch(setAccessToken(''));
        dispatch(setIdToken(''));
        dispatch(setCognitoUserInfo({}))
        dispatch(setLoginInitialState({
            userName: '',
            eMail: '',
            date: '',
            givingList: [],
            receivingList: [],
            isSignIn: false,
        }));
        userPool.getCurrentUser().signOut();
        history.push('/login');
    } else {
        console.log("user not available")
        alert("you are not login yet")
    }
};

// AWS Cognito User Sign Up
export const userSignUp = ({eMail, phoneNumber, password}) => dispatch => {
    const dataEmail = {
        Name: 'email',
        Value: eMail,
    };
    const dataPhoneNumber = {
        Name: 'phone_number',
        Value: phoneNumber,
    };
    
    const attributeList = [];
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

    userPool.signUp( eMail, password, attributeList, null, function(
        err,
        result
    ) {
        if (err) {
            alert(('cognitoSlice' + err.message) || JSON.stringify('cognitoSlice' + err));
            return;
        }
        var cognitoUser = result.user;
        const userData = JSON.stringify({eMail, phoneNumber, password, UserId: cognitoUser.getUsername()});
        alert('user name is ' + cognitoUser.getUsername() + 'Please check your email for verification code');

        dataPhoneNumber?.value && cognitoUser.confirmRegistration(dataPhoneNumber.value, true, function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });

        axios.post(`${postURL}/user`, userData, {
            headers: { 'Content-Type' : 'application/json' }
          })
          .then(res => {
              console.log("login successful, should redirect to login page again")
          })
          .catch(err => console.log('err', err))
    })
};

// AWS Cognito Verification 
export const verificationAccount = (eMail, code, history) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
            console.log("verification error --->: ", err.message);
            alert(err.message || JSON.stringify(err));
            return;
        } else {
            alert('call result: ' + result);
            history.push('/login');
            // trigger user data update for giving and recieving list card Id
        }
    })
};

export const resendEmailVerifyCode = (eMail) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.forgotPassword({
        onSuccess: (data) => {
            // successfully initiated reset password request
            console.log('CodeDeliveryData from forgotPassword: ' + data);
        },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        },
    });
}

export const setUpNewPassword = (eMail, code, newPassword) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmPassword(code, newPassword, {
        onSuccess() {
            console.log('Password confirmed!');
            alert('password successfully changed')
        },
        onFailure(err) {
            console.log('Password not confirmed!');
            alert('change password failed')
        },
    });
}

export const cognitoFull = state => state.cognitoState;
export const accessToken = state => state.cognitoState.accessToken;
export const idToken = state => state.cognitoState.idToken;
export const errorMessage = state => state.cognitoState.errorMessage;
export const cognitoUserInfo = state => state.cognitoState.cognitoUserInfo;
export default cognitoSlice.reducer;