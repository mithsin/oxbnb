import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verificationAccount } from 'States/userSlice';
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
    const classes = signUpStyles();
    
    const clearInput = () => {
        setInputData({
            eMail: '',
            code: ''
        })
    } 
    useEffect(()=>{
        if( !emailError && !numError ) {
            setSubmitDisable(false);
        } else {
            setSubmitDisable(true);
        }
    },[
        emailError,
        numError
    ])

    const onInputChange = e => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneNumberRegex = /^\d+$/;
        if(e.target.name === 'eMail'){
            (e.target.value === "" || emailRegex.test(e.target.value)) ? setEmailError(false) : setEmailError(true);
        };
        if(e.target.name === 'phoneNumber'){
            (e.target.value === "" || phoneNumberRegex.test(e.target.value)) ? setNumError(false) : setNumError(true);
        };
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    };
    const onFormSubmit = () => {    
        console.log('inputData---->: ', inputData)
        dispatch(verificationAccount(inputData.eMail, inputData.code, history));
        clearInput();
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
                <div className={ classes.signUpFormWrapper }>
                    { (emailError || numError ) && 
                        <h2 className={ classes.error }>
                            {emailError && emailError}
                            {numError &&  numError}
                        </h2>
                    }
                   
                    {inputSetting.map((fill, index) => 
                        <MuiInputField 
                            key={`${fill.name}-${index}`} 
                            { ...fill }
                            onChange={ onInputChange } />
                    )}
                    
                    <SubmitButton {...submitDisable && {disabled : submitDisable}} onClick={ onFormSubmit }/>
                </div>
            </div>
        </div>
    );
}

export default Verify;