import { Col, Row, FormControl, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom';

const FooterTopContent = () => {
    return (
        <Row className="footer-content-row">
            <Col lg={5}>
                <Row>
                    <Col lg={6} className="footer-content-col-1">
                        <Row>
                            <Col lg={2} xs={2}>
                                <i class="fas fa-search-location"></i>
                            </Col>
                            <Col lg={10} xs={10}>
                                <div>
                                    <h5>Little Falls</h5>
                                    <p className="location-address">47 East Broadway, Little Falls, MN 56345</p>
                                    <p><a href="https://maps.app.goo.gl/u8WYH8zr6LPfUaC3A" />
                                        Find on Google Maps  <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} xs={2}>
                                <i class="fas fa-phone"></i>
                            </Col>
                            <Col lg={10} xs={10} style={{ paddingTop: '3px', fontSize: '16px' }}>
                                <p><a>(320) 639-2229</a></p>
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col lg={2} xs={2}>
                                <i class="fas fa-search-location"></i>
                            </Col>
                            <Col lg={10} xs={10}>
                                <div>
                                    <h5>St. Cloud</h5>
                                    <p className="location-address">710 W Germain St. Saint Cloud Minnesota, 56301</p>
                                    <p><a href="https://maps.app.goo.gl/u8WYH8zr6LPfUaC3A" />
                                        Find on Google Maps  <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} xs={2}>
                                <i class="fas fa-phone"></i>
                            </Col>
                            <Col lg={10} xs={10} style={{ paddingTop: '3px', fontSize: '16px' }}>
                                <p><a>(320) 639-2229</a></p>
                            </Col>
                        </Row>

                    </Col>
                    <Col className="mb-4" lg={1}></Col>
                    <Col lg={4}>
                        <h5>Our Services</h5>
                        <ul>
                            <li><NavLink className='footer-nav-link' to="/create-find-registry">Create/Find A Registry</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/nursery-design-center">Nursery Design Center</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/event-space-rental">Event Space Rental</NavLink></li>
                        </ul>

                    </Col>
                </Row>
            </Col>
            <Col lg={4}>
                <Row>
                    <Col lg={6}>
                        <h5>Your Order</h5>
                        <ul>
                            <li><NavLink className='footer-nav-link' to="/track-your-order">Track Your Order</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/bob-defenders-discount">BOB Defenders Discount</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/shipping-delivery">Shipping & Delivery</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/returns-exchanges">Returns & Exchanges</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/price-matching-policy">Price Matching Policy</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/refund-policy">Refund Policy</NavLink></li>
                        </ul>

                    </Col>
                    <Col lg={6}>
                        <h5>Learn More</h5>
                        <ul>
                            <li><NavLink className='footer-nav-link' to="/about-us">About Us</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/our-blog">Our Blog</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/faqs">FAQs</NavLink></li>
                        </ul>

                        <h5>Help</h5>
                        <ul>
                            <li><NavLink className='footer-nav-link' to="/contact-us">Contact Us</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/privacy-security-policy">Privacy & Security Policy</NavLink></li>
                            <li><NavLink className='footer-nav-link' to="/terms-conditions">Terms & Conditions of Use</NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col lg={3}>
                <h5>Sign up for Our Newsletter</h5>
                <p>Sign Up For Our Newsletter and receive early access to New Arrivals, Sales, Events + more</p>
                <Row><FormControl type="text" placeholder="Email" className="search-input mb-3" />
                    <Button variant="outline-dark" className="mb-3" style={{ width: '20%' }}>Send</Button></Row>
                <small>By signing up, you will receive offers, promotions and other commercial messages. You are also agreeing to babysonbroadway Privacy Policy. You may unsubscribe at any time.</small>
            </Col>
        </Row>
    );
}

export default FooterTopContent;