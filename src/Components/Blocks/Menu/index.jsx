import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'States/userSlice';
import { useHistory } from 'react-router-dom';
import { signUpStyles } from './styles';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { MuiInputField } from 'Components/MUI';
import CloseIcon from '@material-ui/icons/Close';

const Menu = ({setopenLoginBlock, setMobileMoreAnchorEl}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = signUpStyles();
    const [inputData, setInputData] = useState({
        eMail: '',
        password: ''
    });
    const [submitDisable, setSubmitDisable] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [numError, setNumError] = useState(false);
    
    useEffect(()=>{
        if( inputData.eMail.length && inputData.password.length && !emailError && !numError ) {
            setSubmitDisable(false);
        } else {
            setSubmitDisable(true);
        }
    },[
        emailError,
        numError,
        inputData
    ])

    const onInputChange = e => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(e.target.name === 'eMail'){
            (e.target.value === "" || emailRegex.test(e.target.value)) ? setEmailError(false) : setEmailError(true);
        };
        if(e.target.name === 'password'){
            (e.target.value === "" || inputData?.password?.length > 4) ? setNumError(false) : setNumError(true);
        };
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    };
    const onClickLoginIn = () => {
        setMobileMoreAnchorEl(false);
        setopenLoginBlock(false);
        dispatch(userLogin(inputData));
    };
    const onClickSignUpRedirect = () => {
        history.push('/signup')
    };
    const inputSetting = [
        {
            name: 'eMail',
            label: 'E-Mail',
            required: true,
            inputError: emailError ? true : false,
            value: inputData?.eMail
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            inputError: numError ? true : false,
            value: inputData?.password
        }
    ];

    return (
        <div className={ classes.loginBlockWrapper }>
            <div className={ classes.loginBlockInnerWrap }>
                <CloseIcon
                fontSize="large"
                    className={ classes.closeIcon }
                    onClick={()=> setopenLoginBlock(false)} />
                <h1>Login</h1>
                <div className={ classes.signUpFormWrapper }>
                    {inputSetting.map((fill, index) => 
                        <MuiInputField 
                            key={`${fill.name}-${index}`} 
                            { ...fill }
                            onChange={ onInputChange } />
                    )}
                    <SubmitButton {...submitDisable && {disabled : submitDisable}} onClick={ onClickLoginIn }/>
                </div>
                <div className={ classes.routeLinkWrapper}>
                    <span className={ classes.signUp } onClick={onClickSignUpRedirect}>SIGN UP</span>
                </div>
            </div>
        </div>
    );
}

export default Menu;