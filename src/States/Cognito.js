import React from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const Cognito = () => {
    const poolData = {
        UserPoolId: 'us-east-1_8E8Zpfvdm',
        ClientId: '3kegd80o4ftlh7pfk05trq6pio'
    }

    const UserPool = new CognitoUserPool(poolData);

    const onSubmit = event => {
        UserPool, signUp(email, password, [], null, (err, data) => {

        })
    }

}

// https://www.youtube.com/watch?v=-qo5GFdN-Ck

// Google
// Google id: 215313791418-apetni40hv97o9g8cuafa0h7nhrvoooi.apps.googleusercontent.com
// Google secret: xR4LA1FGWOrH_GwAIK8HSOP3
