import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FusionAuthProvider } from '@fusionauth/react-sdk';

const config = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  serverUrl: process.env.REACT_APP_FUSIONAUTH_URL,
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  onRedirect: (state) => { },
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FusionAuthProvider {...config}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </FusionAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
