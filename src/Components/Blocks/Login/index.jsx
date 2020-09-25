import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'States/userSlice';
import { signUpStyles } from './styles';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { MuiInputField } from 'Components/MUI';

const Login = () => {
    const dispatch = useDispatch();
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
        dispatch(userLogin(inputData.eMail, inputData.password));
        // clearInput();
    };
    const onClickSignUpRedirect = () => {
        console.log('redirect to sign up')
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
            required: true,
            inputError: numError ? true : false,
            value: inputData?.password
        }
    ];

    return (
        <div className={ classes.loginBlockWrapper }>
            <div className={ classes.loginBlockInnerWrap }>
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
                <div className={ classes.resendCodeWrapper}>
                    <span className={ classes.resendCode } onClick={onClickSignUpRedirect}>SIGN UP</span>
                </div>
            </div>
        </div>
    );
}

export default Login;