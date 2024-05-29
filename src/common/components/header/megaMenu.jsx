
import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BRAND_LOGOS } from '../../../assets/assets';

const MegaMenu = () => {
  const [show, setShow] = useState(false);
  const handleToggleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <Dropdown className="mega-menu" show={show} onToggle={() => setShow(!show)}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="category-select" onClick={handleToggleClick}>
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <button className="close-button" onClick={(e) => handleCloseClick(e)}>
          &times;
        </button>
        <Container className='mega-menu-container'>
          <Row className='mb-3'>
            <Col className='mega-menu-col'>
              <h6>Baby Health & Safety</h6>
              <ul>
                <li><NavLink to="/monitors">Monitors</NavLink></li>
                <li><NavLink to="/natural-remedies">Natural Remedies</NavLink></li>
                <li><NavLink to="/teething">Teething</NavLink></li>
                <li><NavLink to="/skin-care">Skin Care</NavLink></li>
                <li><NavLink to="/oral-hygiene">Oral Hygiene</NavLink></li>
                <li><NavLink to="/health-and-safety">Health and Safety</NavLink></li>
                <li><NavLink to="/pacifiers-and-soothers">Pacifiers and Soothers</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Bath & Potty</h6>
              <ul>
                <li><NavLink to="/bath">Bath</NavLink></li>
                <li><NavLink to="/diapering">Diapering</NavLink></li>
                <li><NavLink to="/potty-training">Potty Training</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Gear</h6>
              <ul>
                <li><NavLink to="/strollers">Strollers</NavLink></li>
                <li><NavLink to="/shop-by-brand">Shop By Brand</NavLink></li>
                <li><NavLink to="/gear-accessories">Gear Accessories</NavLink></li>
                <li><NavLink to="/travel-systems">Travel Systems</NavLink></li>
                <li><NavLink to="/car-seats-and-accessories">Car Seats and Accessories</NavLink></li>
                <li><NavLink to="/baby-carriers-and-wraps">Baby Carriers and Wraps</NavLink></li>
                <li><NavLink to="/stroller-wagons">Stroller Wagons</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Nursery & Sleep Essentials</h6>
              <ul>
                <li><NavLink to="/rugs">Rugs</NavLink></li>
                <li><NavLink to="/shop-furniture-by-brand">Shop Furniture By Brand</NavLink></li>
                <li><NavLink to="/cribs-under-399">Cribs Under $399</NavLink></li>
                <li><NavLink to="/swaddles-and-blankets">Swaddles and Blankets</NavLink></li>
                <li><NavLink to="/nursery-in-a-box">Nursery in a Box</NavLink></li>
                <li><NavLink to="/sleep-sacks">Sleep Sacks</NavLink></li>
                <li><NavLink to="/bassinets-pack-n-plays">Bassinets + Pack n’ Plays</NavLink></li>
                <li><NavLink to="/youth-and-toddler-beds">Youth and Toddler Beds</NavLink></li>
                <li><NavLink to="/bouncers-swings">Bouncers + Swings</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Nursery & Sleep Essentials Continued</h6>
              <ul>
                <li><NavLink to="/dressers-and-case-pieces">Dressers and Case Pieces</NavLink></li>
                <li><NavLink to="/furniture-accessories">Furniture Accessories</NavLink></li>
                <li><NavLink to="/mattresses">Mattresses</NavLink></li>
                <li><NavLink to="/nursery-and-sleep-accessories">Nursery and Sleep Accessories</NavLink></li>
                <li><NavLink to="/monitors">Monitors</NavLink></li>
                <li><NavLink to="/cribs">Cribs</NavLink></li>
                <li><NavLink to="/bedding-linens">Bedding + Linens</NavLink></li>
                <li><NavLink to="/mini-cribs">Mini Cribs</NavLink></li>
                <li><NavLink to="/night-lights-sound-machines">Night Lights + Sound Machines</NavLink></li>
                <li><NavLink to="/seating">Seating</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Clothing & Accessories</h6>
              <ul>
                <li><NavLink to="/diaper-bags">Diaper Bags</NavLink></li>
                <li><NavLink to="/hats">Hats</NavLink></li>
                <li><NavLink to="/clothing-accessories">Clothing Accessories</NavLink></li>
                <li><NavLink to="/sleep-sacks">Sleep Sacks</NavLink></li>
                <li><NavLink to="/sunglasses">Sunglasses</NavLink></li>
                <li><NavLink to="/pajamas">Pajamas</NavLink></li>
                <li><NavLink to="/baby-toddler-clothing">Baby + Toddler Clothing</NavLink></li>
                <li><NavLink to="/dresses">Dresses</NavLink></li>
                <li><NavLink to="/shop-by-brand">Shop By Brand</NavLink></li>
                <li><NavLink to="/pants-joggers">Pants + Joggers</NavLink></li>
              </ul>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col className='mega-menu-col'>
              <h6>Top Registry Products</h6>
              <ul>
                <li><NavLink to="/gear">Gear</NavLink></li>
                <li><NavLink to="/especially-for-mom">Especially for Mom</NavLink></li>
                <li><NavLink to="/baby-essentials">Baby Essentials</NavLink></li>
                <li><NavLink to="/nursery">Nursery</NavLink></li>
                <li><NavLink to="/feeding">Feeding</NavLink></li>
                <li><NavLink to="/personal-care-baby">Personal Care Baby</NavLink></li>
                <li><NavLink to="/nursing">Nursing</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Meal Time</h6>
              <ul>
                <li><NavLink to="/cleaning">Cleaning</NavLink></li>
                <li><NavLink to="/bottles-and-sippy-cups">Bottles and Sippy Cups</NavLink></li>
                <li><NavLink to="/bibs">Bibs</NavLink></li>
                <li><NavLink to="/dishes-and-utensils">Dishes and Utensils</NavLink></li>
                <li><NavLink to="/high-chairs">High Chairs</NavLink></li>
                <li><NavLink to="/feeding-accessories">Feeding Accessories</NavLink></li>
                <li><NavLink to="/formula">Formula</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Breastfeeding</h6>
              <ul>
                <li><NavLink to="/breast-pumps">Breast Pumps</NavLink></li>
                <li><NavLink to="/supplements-and-personal-care">Supplements and Personal Care</NavLink></li>
                <li><NavLink to="/breastfeeding-accessories">Breastfeeding Accessories</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Gifts</h6>
              <ul>
                <li><NavLink to="/gift-cards">Gift Cards</NavLink></li>
                <li><NavLink to="/gifts-for-mom">Gifts For Mom</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Toys & Play</h6>
              <ul>
                <li><NavLink to="/pack-n-plays">Pack n' Plays</NavLink></li>
                <li><NavLink to="/infant-and-toddler-toys">Infant and Toddler Toys</NavLink></li>
                <li><NavLink to="/play-mats-activity-centers">Play Mats + Activity Centers</NavLink></li>
                <li><NavLink to="/plush">Plush</NavLink></li>
                <li><NavLink to="/bouncers-swings">Bouncers + Swings</NavLink></li>
              </ul>
            </Col>
            <Col className='mega-menu-col'>
              <h6>Maternity & Postpartum</h6>
              <ul>
                <li><NavLink to="/maternity">Maternity</NavLink></li>
                <li><NavLink to="/shop-by-trimester">Shop By Trimester</NavLink></li>
              </ul>
            </Col>
          </Row>

          <Row className='mega-menu-brand-row'>
            {BRAND_LOGOS.map((logo, i)=>(
              <Col><img src={logo} alt='logo' className='menu-brand-logo' height={i ===9 ? '31px' :'66px'}/></Col>
            ))}
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MegaMenu;