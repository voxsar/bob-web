import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles/FlipCard.css';

const FlipCard = ({title = '', list = [], cardImg}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
   <>
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card>
            <img src={cardImg} alt='card front'/>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card>
            <p className='trimester-card-title'>Products</p>
            <ul className='flip-card-content'>
              {list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <a href='/' className='btn flip-card-button'>Shop Now</a>
          </Card>
        </div>
      </div>
    </div>
    <p className='fw-semibold'>{title}</p>
   </>
  );
};

export default FlipCard;
