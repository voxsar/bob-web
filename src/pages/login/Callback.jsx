import React, { useEffect } from 'react';
import { useFusionAuth } from '@fusionauth/react-sdk';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const { handleLoginCallback } = useFusionAuth();
    const navigate = useNavigate();

    useEffect(() => {
        handleLoginCallback().then(() => {
            // Redirect to the home page or desired page after successful login
            navigate('/');
        }).catch(error => {
            console.error('Error handling login callback:', error);
        });
    }, [handleLoginCallback, navigate]);

    return <div>Loading...</div>;
};

export default Callback;