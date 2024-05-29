import './App.css';
import Header from './common/components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './common/components/footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <div className='bob-website'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
