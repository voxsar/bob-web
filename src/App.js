import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import ScrollToPosition from './common/components/ScrollToPosition';
import ErrorBoundary from './pages/ErrorBoundary';
// import { handleCallback, login } from '../src/api/authService';

const Header = lazy(() => import('./common/components/header/Header'));
const Home = lazy(() => import('./pages/home/Home'));
const Footer = lazy(() => import('./common/components/footer/Footer'));
const AboutUs = lazy(() => import('./pages/aboutUs/AboutUs'));
const ContactUs = lazy(() => import('./pages/contactUs/ContactUs'));
const Faq = lazy(() => import('./pages/faq/Faq'));
const ProductView = lazy(() => import('./pages/product/ProductView'));
const EventSpaces = lazy(() => import('./pages/eventSpaces/EventSpaces'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));
// const OAuthCallback = lazy(() => import('./pages/login/OAuthCallback'));


function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className='bob-website'>
          <Suspense fallback={<FallbackUI />}>
            <ScrollToPosition position={200} />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/oauth-callback" component={<OAuthCallback />} /> */}
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/product/:productId" element={<ProductView />} />
              <Route path="/event-spaces" element={<EventSpaces />} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </ErrorBoundary>
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