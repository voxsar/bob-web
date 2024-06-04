import './App.css';
import Header from './common/components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './common/components/footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Faq from './pages/FAQ/Faq';
import Product from './pages/Product/Product';

function App() {
  return (
    <Router>
      <div className='bob-website'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
