import React, { useState } from 'react';
import { Offcanvas, Accordion } from 'react-bootstrap';
import logo from '../../assets/bob-logo.png';
import "./styles/Drawer.css";
import HeaderNavBottom from './header/headerNavBottom';
import { Link } from 'react-router-dom';
import { menuData } from '../data';
// import { FaArrowCircleUp } from "react-icons/fa";

const Drawer = ({ isOpen, onClose }) => {
    return (
        <Offcanvas show={isOpen} onHide={onClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img src={logo} className="drawer-logo" />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <HeaderNavBottom />
                <div className='drawer-divider mt-3'></div>
                <div className='p-4'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Main Menu</Accordion.Header>
                            <Accordion.Body>
                                <ul className='drawer-main-nav-list'>
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/'}>Shop</Link></li>
                                    <li><Link to={'/'}>FSA/HSA Approved Items</Link></li>
                                    <li><Link to={'/'}>Nursery Design Center</Link></li>
                                    <li><Link to={'/'}>Registries</Link></li>
                                    <li><Link to={'/'}>BOB Defenders</Link></li>
                                    <li><Link to={'/event-spaces'} onClick={onClose}>Event Spaces</Link></li>
                                    <li><Link to={'/'}>About Us</Link></li>
                                    <li><Link to={'/'}>Contact Us</Link></li>
                                    <li><Link to={'/'}>FAQ</Link></li>
                                    <li><Link to={'/'}>Blog</Link></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h5 className='ps-3 mt-3 mb-5'>All Categories</h5>
                    <Accordion defaultActiveKey="0" alwaysOpen className='drawer-accordion-category'>
                        {menuData.map((section, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{section.title}</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}><Link to={link.path}>{link.label}</Link></li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    <div className='d-flex justify-content-center mt-5'>
                        <button className='drawer-btn' onClick={onClose}>Close</button>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Drawer;