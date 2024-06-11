import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

const Header = React.lazy(() => import('./common/components/header/Header'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Footer = React.lazy(() => import('./common/components/footer/Footer'));
const AboutUs = React.lazy(() => import('./pages/aboutUs/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/contactUs/ContactUs'));
const Faq = React.lazy(() => import('./pages/faq/Faq'));
const ProductView = React.lazy(() => import('./pages/product/ProductView'));
const EventSpaces = React.lazy(() => import('./pages/eventSpaces/EventSpaces'));

function App() {
  return (
    <Router>
      <div className='bob-website'>
        <Suspense fallback={<FallbackUI />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/product/:productId" element={<ProductView />} />
            <Route path="/event-spaces" element={<EventSpaces />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
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