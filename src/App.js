import './App.css';
import Header from './common/components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './common/components/footer/Footer';
import EventSpaces from './pages/eventSpaces/EventSpaces';

function App() {
  return (
    <Router>
      <div className='bob-website'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-spaces" element={<EventSpaces />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
