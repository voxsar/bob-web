import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import ScrollToPosition from './common/components/ScrollToPosition';
import ErrorBoundary from './pages/ErrorBoundary';
import { FusionAuthProvider } from '@fusionauth/react-sdk';

const Header = lazy(() => import('./common/components/Header/Header'));
const Home = lazy(() => import('./pages/Home/Home'));
const Footer = lazy(() => import('./common/components/Footer/Footer'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const Faq = lazy(() => import('./pages/Faq/Faq'));
const ProductView = lazy(() => import('./pages/Product/ProductView'));
const EventSpaces = lazy(() => import('./pages/EventSpaces/EventSpaces'));
const Callback = lazy(() => import('./pages/Login/Callback'));


const config = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  serverUrl: process.env.REACT_APP_FUSIONAUTH_URL,
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  onRedirect: (state) => {
    console.log(`Redirect happened with state value: ${state}`);
  },
  scope: 'openid email profile offline_access'
};



function App() {
  return (
    <Router>
      <FusionAuthProvider {...config}>
        <ErrorBoundary>
          <div className='bob-website'>
            <Suspense fallback={<FallbackUI />}>
              <ScrollToPosition position={200} />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/product/:productId" element={<ProductView />} />
                <Route path="/event-spaces" element={<EventSpaces />} />
              </Routes>
              <Footer />
            </Suspense>
          </div>
        </ErrorBoundary>
      </FusionAuthProvider>
    </Router>
  );
}

const FallbackUI = () => (
  <div className="fallback-ui">
    <Spinner animation="border" role="status">
    </Spinner>
  </div>
);

export default App;