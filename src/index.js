import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FusionAuthProvider } from '@fusionauth/react-sdk';

const config = {
  clientId: "f9bd677c-f925-44d5-bc52-6d2164830bf0",
  redirectUri: "", // The URI that the user is directed to after the login/register/logout action
  serverUrl: "", // The url of the server that performs the token exchange
  shouldAutoFetchUserInfo: true, // Automatically fetch userInfo when logged in. Defaults to false.
  shouldAutoRefresh: true, // Enables automatic token refresh. Defaults to false.
  onRedirect: (state) => { }, // Optional callback invoked upon redirect back from login or register.
};

// Commenting out strict mode only for dev environment. 
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
