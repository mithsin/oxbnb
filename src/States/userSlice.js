import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL,
    ClientId: process.env.REACT_APP_CLIENT_ID
};
// const postURL = process.env.REACT_APP_API_GATEWAY_URL;
const userPool = new CognitoUserPool(poolData);

export const userSlice = createSlice({
    name: 'cognitoState',
    initialState: {
        isLoggedIn: false,
        profilePicUrl: '',
        name: '',
        currency: ''
    },
    reducers: {
        setUserState: (state, action) => {
            return {...state, ...action.payload};
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setProfilePicUrl: (state, action) => {
            state.profilePicUrl = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export const {
    setUserState,
    setIsLoggedIn,
    setProfilePicUrl,
    setName,
    setCurrency,
} = userSlice.actions;

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
        } else {
            var cognitoUser = result.user;
            const userData = JSON.stringify({eMail, phoneNumber, UserId: cognitoUser.getUsername()});
            alert('user name is ' + cognitoUser.getUsername() + 'Please check your email for verification code');
        }
    })
};

// AWS Cognito User Verification by Email
export const verificationAccount = (eMail, code, history) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, (err, result) => {
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

// AWS Cognito Send Change Password Link
export const getForgotPassworCode= (eMail) => dispatch => {
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

// AWS Cognito Set New Password
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

// AWS User Login
export const userLogin = ({eMail, password, history}) => dispatch => {
    const authenticationData = {
        Username: eMail,
        Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(
        authenticationData
    );

    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            // TO DO: Set Init Data
            // TO DO: save token in Local storage

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
        // To Do: clear init data

        userPool.getCurrentUser().signOut();
        history.push('/login');
    } else {
        console.log("user not available")
        alert("you are not login yet")
    }
};

// AWS Cognito Get User Data
export const userLoginCheck = () => dispatch => {
    if (userPool.getCurrentUser() != null) {
        userPool.getCurrentUser().getSession((err, session) => {
            if(err){console.log('userPool.getCurrentUser() err---->', err)};
            const idToken = session?.getIdToken().getJwtToken();
          });
    } 
};


export const userState = state => state.userSlice;
export default userSlice.reducer;

// https://www.youtube.com/watch?v=-qo5GFdN-Ck

// Google
// Google id: 215313791418-apetni40hv97o9g8cuafa0h7nhrvoooi.apps.googleusercontent.com
// Google secret: xR4LA1FGWOrH_GwAIK8HSOP3
