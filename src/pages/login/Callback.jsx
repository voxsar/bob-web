import React, { useEffect } from 'react';
import { useFusionAuth } from '@fusionauth/react-sdk';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const { isLoggedIn, error } = useFusionAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        } else if (error) {
            throw new Error('Login error: ' + error.message);
        } else {
            navigate('/');
        }
    }, [isLoggedIn, error, navigate]);

    return <div>Loading...</div>;
};

export default Callback;