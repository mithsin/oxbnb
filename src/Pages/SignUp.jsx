import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignUp } from 'States/userSlice';
import ImageUpload from 'Components/ImageUpload/ImageUpload';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { MuiInputField } from 'Components/MUI';
import {Radio, RadioGroup, FormControlLabel} from '@material-ui/core';

const SignUp = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({});
    const [imageURL, setImageURL] = useState('');

    const onInputChange = e => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    };
    const onFormSubmit = () => {
        console.log("submit inputData -> ", inputData)
        setInputData({});
        // dispatch(userSignUp(inputData));
    };
    
    const inputSetting = [
        {
            name: 'eMail',
            label: 'E-Mail',
            required: true,
            value: inputData.eMail || ''
        },
        {
            name: 'phoneNumber',
            label: 'Phone Number',
            required: true,
            value: inputData.phoneNumber || ''
        },
        {
            name: 'password',
            label: 'Password',
            required: true,
            value: inputData.password || ''
        },
        {
            name: 'preferredUsername',
            label: 'Preferred Name',
            required: false,
            value: inputData.preferredUsername || ''
        },
        {
            name: 'familyName',
            label: 'Family Name',
            required: false,
            value: inputData.familyName || ''
        },
        {
            name: 'givenName',
            label: 'Given Name',
            required: false,
            value: inputData.givenName || ''
        }
    ];

    const profileImage = imageURL;
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
        <div>
            <div style={{marginTop: '100px'}}>
                <h1>SIGN UP</h1>
                <ImageUpload setImageURL={setImageURL}/>
                {inputSetting.map((fill, index) => 
                    <MuiInputField 
                        key={`${fill.name}-${index}`} 
                        { ...fill }
                        type="text"
                        onChange={ onInputChange } />
                )}
                <RadioGroup 
                    aria-label="isAgent" 
                    name="isAgent" 
                    row
                    style={{justifyContent: "space-around", flex: "1"}}
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
                <SubmitButton onClick={ onFormSubmit }/>
            </div>
        </div>

    );
}

export default SignUp;