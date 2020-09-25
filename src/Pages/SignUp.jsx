import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userSignUp } from 'States/userSlice';
import { signUpStyles } from './styles';
import { useHistory } from 'react-router-dom';
import ImageUpload from 'Components/ImageUpload/ImageUpload';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { MuiInputField } from 'Components/MUI';
import {
    Radio, 
    RadioGroup, 
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@material-ui/core';

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputData, setInputData] = useState({isAgent: 'no'});
    const [imageURL, setImageURL] = useState('');
    const [submitDisable, setSubmitDisable] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [numError, setNumError] = useState(false);
    const classes = signUpStyles();
    
    useEffect(()=>{
        if( !emailError && !numError && inputData.password ) {
            setSubmitDisable(false);
        } else {
            setSubmitDisable(true);
        }
    },[
        emailError,
        numError,
        inputData.password
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
        const params = {
            ...inputData,
            picture: imageURL,
            history: history
        }
        
        dispatch(userSignUp(params));
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
            name: 'phoneNumber',
            label: 'Phone Number',
            required: true,
            inputError: numError ? true : false,
            value: inputData?.phoneNumber
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            inputError: false,
            value: inputData?.password
        },
        {
            name: 'preferredUsername',
            label: 'Preferred Name',
            required: false,
            value: inputData?.preferredUsername
        },
        {
            name: 'familyName',
            label: 'Family Name',
            required: false,
            value: inputData?.familyName
        },
        {
            name: 'givenName',
            label: 'Given Name',
            required: false,
            value: inputData?.givenName
        }
    ];

    const isAgentSetting = {
        type: "content",
        title: "Are you an Agent or Host?",
        contentList: [{
                type: "radio",
                name: "isAgent",
                value: "yes",
                label: "YES"
            },{
                type: "radio",
                name: "isAgent",
                value: "no",
                label: "NO"
        }]
    };

    return (
        <div className={ classes.signUpBodyWrapper }>
            <div className={ classes.signUpInnerWrap }>
                <h1>SIGN UP</h1>
                <div className={ classes.signUpFormWrapper }>
                    { (emailError || numError ) && 
                        <h2 className={ classes.error }>
                            {emailError && emailError}
                            {numError &&  numError}
                        </h2>
                    }
               
                    <ImageUpload setImageURL={setImageURL}/>
                   
                    {inputSetting.map((fill, index) => 
                        <MuiInputField 
                            key={`${fill.name}-${index}`} 
                            { ...fill }
                            onChange={ onInputChange } />
                    )}
                    <FormControl
                        className={ classes.inputContainer }
                        component="fieldset">
                        <FormLabel component="legend">Are you a host or agent?</FormLabel>
                        <RadioGroup 
                            aria-label="isAgent" 
                            name="isAgent" 
                            row
                            className={ classes.radioContainer }
                            value={isAgentSetting.isAgent} 
                            onChange={onInputChange} >
                                {
                                    isAgentSetting.contentList.map((listItem, indexi) => (
                                        <FormControlLabel 
                                            key={`${inputSetting.name}-${indexi}`} 
                                            value={listItem.value} 
                                            control={<Radio />} 
                                            label={listItem.label} />
                                    ))
                                }
                        </RadioGroup>
                    </FormControl>
                    <SubmitButton {...submitDisable && {disabled : submitDisable}} onClick={ onFormSubmit }/>
                </div>
            </div>
        </div>
    );
}

export default SignUp;