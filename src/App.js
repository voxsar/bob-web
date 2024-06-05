import './App.css';
import Header from './common/components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './common/components/footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Faq from './pages/FAQ/Faq';
<<<<<<< HEAD
import Product from './pages/Product/Product';
=======
>>>>>>> 0b429febad879cebc33a776fa8175b96030444d2
import EventSpaces from './pages/eventSpaces/EventSpaces';

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
<<<<<<< HEAD
          <Route path="/Product" element={<Product />} />
=======
>>>>>>> 0b429febad879cebc33a776fa8175b96030444d2
          <Route path="/event-spaces" element={<EventSpaces />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
