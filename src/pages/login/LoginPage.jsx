import React from 'react';
import {
    FusionAuthLoginButton,
    FusionAuthLogoutButton,
    FusionAuthRegisterButton
} from '@fusionauth/react-sdk';


const LoginPage = () => (
    <>
        <h1>Welcome, please log in or register</h1>
        <FusionAuthLoginButton />
        <FusionAuthRegisterButton />
    </>
);
export default LoginPage;