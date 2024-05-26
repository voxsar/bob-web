import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../../../assets/bob-logo.png';
import FooterTopContent from './footerTopContent';

const FooterTop = () => {
    return (
        <div className='footer-top-container'>
            <Row className='footer-top-row'>
                <Col lg={9}>
                    <img src={logo} alt='app-logo' className='footer-app-logo' />

                </Col>
                <Col lg={3}>
                    <Row className="social-media-row">
                        <Col className="icon-col">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </Col>
                        <Col className="icon-col">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </Col>
                        <Col className="icon-col">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </Col>
                        <Col className="icon-col">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </Col>
                        <Col className="icon-col">
                            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </Col>
                        <Col className="icon-col">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div className='h-divider'></div>
            <FooterTopContent />
            <div className='h-divider'></div>

            <Row className='footer-bottom-row'>
                <Col lg={4}>
                    <Row>
                        <Col>
                            <p><i class="fa-solid fa-location-arrow"></i> Find Your Store</p>
                        </Col>
                        <Col>
                            <p><i class="fa-solid fa-ticket"></i> Gift Cards</p>
                        </Col>
                    </Row>

                </Col>
                <Col></Col>
                <Col lg={5}>
                    <Row>
                        <Col lg={6} className='d-flex align-items-center'>
                            <p>Listen to the Rolling In the Deep Podcast</p>
                        </Col>
                        <Col lg={6}>
                            <Row className="social-media-row">

                                <Col className="icon-col">
                                    <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-spotify"></i>
                                    </a>
                                </Col>
                                <Col className="icon-col">
                                    <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-apple"></i>
                                    </a>
                                </Col>
                                <Col className="icon-col">
                                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-amazon"></i>
                                    </a>
                                </Col>
                                <Col className="icon-col">
                                    <a href="https://www.audible.com" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-audible"></i>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    );
}

export default FooterTop;