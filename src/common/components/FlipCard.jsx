import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles/FlipCard.css';

const FlipCard = ({ title = '', list = [], cardImg, isSmallScreen = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {isSmallScreen ? (
        <div className='flip-card'>
          <a href='/'>
            <Card>
              <img src={cardImg} alt='card front' />
            </Card>
          </a>
        </div>
      ) :
        (
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card>
                  <img src={cardImg} alt='card front' />
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
        )}
      <p className='fw-semibold flip-card-title'>{title} {isSmallScreen && <span><i class="fa-solid fa-arrow-right" style={{ color: 'rgb(126 126 126)' }}></i></span>}</p>
    </>
  );
};

export default FlipCard;
