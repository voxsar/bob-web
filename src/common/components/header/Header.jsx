import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Col } from 'react-bootstrap';
import '../styles/Header.css';
import HeaderSearch from './headerSearch';
import logo from '../../../assets/bob-logo.png';
import HeaderNav from './headerNav';
import HeaderNavBottom from './headerNavBottom';
import Carousel from '../Carousel';
import { headerImages } from '../../data';
import Drawer from '../Drawer';
import useIsSmallScreen from '../../../hooks/useIsSmallScreen';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar className='header-top-bar-light'>
        <Container className='header-top-light-container'>
          <Nav className="ml-auto header-social">
            <Nav.Link href="#"><i className="fab fa-facebook-f"></i></Nav.Link>
            <Nav.Link href="#"><i className="fab fa-instagram"></i></Nav.Link>
            <Nav.Link href="#"><i className="fab fa-twitter"></i></Nav.Link>
            <Nav.Link href="#"><i className="fab fa-youtube"></i></Nav.Link>
            <Nav.Link href="#"><i className="fab fa-tiktok"></i></Nav.Link>
            <Nav.Link href="#"><i className="fab fa-pinterest"></i></Nav.Link>
          </Nav>
          <Nav className="mr-auto header-contact">
            <Nav.Link href="tel:320-639-2229">(320) 639-2229</Nav.Link>
            <Nav.Link href="mailto:sales@babysonbroadway.com">sales@babysonbroadway.com</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      <Navbar className="header-top-bar-dark" expand="lg">
        <Container className="header-menu">
          <Nav>
            <Nav.Link href="#">Sign Up For Our Newsletter</Nav.Link>
          </Nav>
          <Nav className="ml-auto nav-dark-link">
            <Nav.Link href="#"><i className="fas fa-award"></i>Loyalty Points</Nav.Link>
            <Nav.Link href="#"><i className="fas fa-gift"></i>Gift Cards</Nav.Link>
            <Nav.Link href="#"><i className="fas fa-map-marker-alt"></i>Track Your Order</Nav.Link>
            <Nav.Link href="#"><i className="fas fa-store"></i>Store Locations</Nav.Link>
            <Nav.Link href="#"><i className="fas fa-user-circle"></i>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Search bar section */}
      <HeaderSearch />

      <Container className='d-flex justify-content-center'>
        <img src={logo} className='header-app-logo' alt='app-logo' />
        {isSmallScreen && (<Col className="d-flex justify-content-center align-items-center" xs={2}>
          <button onClick={toggleDrawer} className="header-more-btn"><i className="fa-solid fa-bars"></i></button>
        </Col>)}
      </Container>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      <HeaderNav />
      <Carousel
        content={headerImages}
        isPagination={true}
        isNavigation={false}
        slidesPerView={1}
        spaceBetween={10}
        containerStyle={'top-header-carousel'}
      />
      {!isSmallScreen && <HeaderNavBottom />}
    </>
  );
}

export default Header;