import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verificationAccount, resendVerificationCode } from 'States/userSlice';
import { signUpStyles } from './styles';
import { useHistory } from 'react-router-dom';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { MuiInputField } from 'Components/MUI';

const Verify = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputData, setInputData] = useState({
        eMail: '',
        code: ''
    });
    const [submitDisable, setSubmitDisable] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [numError, setNumError] = useState(false);
    const [resendError, setResendError] = useState('');
    const classes = signUpStyles();
    
    useEffect(()=>{
        if( inputData.eMail.length && inputData.code.length && !emailError && !numError ) {
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
        if(e.target.name === 'code'){
            (e.target.value === "" || inputData?.code?.length > 4) ? setNumError(false) : setNumError(true);
        };
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    };
    const onFormSubmit = () => {
        dispatch(verificationAccount(inputData.eMail, inputData.code, history));
        // clearInput();
    };
    const onClickResendCode = () => {
        if(inputData.eMail){
            setResendError('');
            dispatch(resendVerificationCode(inputData.eMail));
        } else {
            setEmailError(true);
            setResendError('Please fill in email');
        }
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
            name: 'code',
            label: 'Verification Code',
            required: true,
            inputError: numError ? true : false,
            value: inputData?.code
        }
    ];

    return (
        <div className={ classes.signUpBodyWrapper }>
            <div className={ classes.signUpInnerWrap }>
                <h1>Verify Your Account</h1>
                {resendError && <h2 className={ classes.errorText }>{resendError}</h2>}
                <div className={ classes.signUpFormWrapper }>
                    {inputSetting.map((fill, index) => 
                        <MuiInputField 
                            key={`${fill.name}-${index}`} 
                            { ...fill }
                            onChange={ onInputChange } />
                    )}
                    
                    <SubmitButton {...submitDisable && {disabled : submitDisable}} onClick={ onFormSubmit }/>
                </div>
                <div className={ classes.resendCodeWrapper}>
                    <span className={ classes.resendCode } onClick={onClickResendCode}>RESEND CODE</span>
                </div>
            </div>
        </div>
    );
}

export default Verify;