import React, { useState } from 'react';
import { Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const HeaderNav = ({ isDesktop = true, toggleDrawer }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (

        <Container style={{ padding: '0px 0px 50px 0px' }}>
            <Nav className='app-main-navbar-cmp' variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink to="/" className='nav-link' onClick={toggleDrawer}>Home</NavLink>

                </Nav.Item>
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a className="nav-link" href="/test">Shop <i className="fa-solid fa-caret-down ms-1"></i></a>
                    {isDropdownVisible && (
                        <div className="shop-dropdown-menu">
                            <ul>
                                <li><a href="/test">Baby Health and Safety</a></li>
                                <li><a href="/test">Bath and Potty</a></li>
                                <li><a href="/test">Breastfeeding</a></li>
                                <li><a href="/test">Clothing and Accessories</a></li>
                                <li><a href="/test">Gear</a></li>
                                <li><a href="/test">HSA/FSA Approved Items</a></li>
                                <li><a href="/test">Maternity and Postpartum</a></li>
                                <li><a href="/test">Meal Time</a></li>
                                <li><a href="/test">Nursery Furniture and Sleep</a></li>
                                <li><a href="/test">Toys and Play</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <Nav.Item>
                    <NavLink to="/test" className='nav-link' onClick={toggleDrawer}>FSA/HSA Approved Items</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/nursery" className='nav-link' onClick={toggleDrawer}>Nursery Design Center</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contactUs" className='nav-link' onClick={toggleDrawer}>REGISTRIES</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/test" className='nav-link' onClick={toggleDrawer}>BOB Defenders</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/event-spaces" className='nav-link' onClick={toggleDrawer}>event spaces</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/about" className='nav-link' onClick={toggleDrawer}>About us</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contact" className='nav-link' onClick={toggleDrawer}>Contact us</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/faq" className='nav-link' onClick={toggleDrawer}>FAQ</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/test" className='nav-link' onClick={toggleDrawer}>Blog</NavLink>
                </Nav.Item>
            </Nav>
        </Container>

    );
}

export default HeaderNav;