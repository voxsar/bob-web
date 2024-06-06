import React, { useState } from 'react';
import './EventSpaces.css';
import StepForm from '../../common/components/StepForm';
import FetchDataComponent from '../../common/components/FetchDataComponent';
import { Row, Col, Container, Tab, Tabs, Image, Modal, Button } from 'react-bootstrap';
import { eventSpaceImgGallery } from '../../common/data';
import GalleryGrid from '../../common/components/GalleryGrid';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const EventSpaces = () => {
    const [key, setKey] = useState('stCloud');
    useScrollFadeIn();

    return (
        <div className='event-space-page-wrapper'>
            <div class="top-divider-container">
                <div class="top-divider"></div>
            </div>
            <div className='event-space-top-header'>
                <h2 className='mb-3 fadeInLeft'>Baby's on Broadway - Event Spaces</h2>
                <p className='top-header-sub-txt mb-5 fadeInRight'>Celebrate Your Special Day with Us</p>
                <Container className='m-0 p-2 vw-full'>
                    <Row className='event-space-top-row w-100'>
                        <Col lg={4}>
                            <i class="fa-regular fa-image"></i>
                            <h3 className='event-space-step-title'>Explore Our Spaces</h3>
                            <p className='event-space-step-desc'>Browse our Little Falls and St. Cloud locations. Find the perfect setting for your special day.</p>
                        </Col>
                        <Col lg={4}>
                            <i class="fa-regular fa-calendar-check"></i>
                            <h3 className='event-space-step-title'>Reserve Your Date</h3>
                            <p className='event-space-step-desc'>Choose a date and reserve your preferred location. Begin the journey to a memorable celebration.</p>
                        </Col>
                        <Col lg={4}>
                            <i class="fa-solid fa-phone"></i>
                            <h3 className='event-space-step-title'>Personalized Assistance</h3>
                            <p className='event-space-step-desc'>Expect a call from our team. We'll discuss details and tailor your baby shower experience.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='explore-title fadeIn'><h2 className='text-center'>Explore Our Spaces</h2></div>
            <div className='gallery-tab-wrapper mb-5 fadeIn'>

                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 mt-5 d-flex justify-content-center border-0"
                >
                    {eventSpaceImgGallery.map((eventSpace) => (
                        <Tab eventKey={eventSpace.titleId} title={eventSpace.title}>
                            <Container>
                                <GalleryGrid imageList={eventSpace.images} />
                            </Container>
                        </Tab>
                    ))}
                </Tabs>

            </div>
            <h2 className='text-center mb-5 fadeIn'>Amenities</h2>
            <Container className='m-0 p-4 vw-full amenities-container'>
                <Row className='w-100 event-space-text-tab p-3'>
                    <Col lg={6}>
                        <p className='event-tab-title fadeInRight'>St. Cloud, MN</p>
                        <Tabs
                            defaultActiveKey="tab1"
                            id="uncontrolled-tab-example"
                            fill
                        >
                            <Tab eventKey="tab1" title="Facilities, Amenities, and Decorations">
                                <ul className='amenities-content-list'>
                                    <li><p><b>Maximum Occupancy:</b></p>
                                        <ul>
                                            <li>The space can accommodate up to 40 guests.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Amenities:</b></p>
                                        <ul>
                                            <li>A/V available upon request.</li>
                                            <li>Access to a sink, coffee bar, and refrigerator.</li>
                                            <li>WiFi access available upon request.</li>
                                            <li>One ADA accessible, gender-neutral restroom.</li>
                                            <li>Wheelchair accessible facility.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Furnishings:</b></p>
                                        <ul>
                                            <li>5 round tables (5ft diameter), rectangle tables (7x4ft), and a 7ft long bar.</li>
                                            <li>28 table chairs, 4 “throne” style chairs, and 1 couch.</li>
                                            <li>Note: Tablecloths not provided.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Decoration Policy:</b></p>
                                        <ul>
                                            <li>You are welcome to bring your own decorations. Confetti is allowed, but glitter is not. Decorations, including tape, must be cleaned up after the event.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Space Customization:</b></p>
                                        <ul>
                                            <li>Tables, chairs, and the couch can be rearranged but must be returned to their original places post-event.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="tab2" title="Rules & Restrictions">
                                <ul className='amenities-content-list'>
                                    <li><p><b>Outside Food:</b></p>
                                        <ul>
                                            <li>Pre-prepared food is allowed; cooking in the space is not permitted.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Noise and Time Guidelines:</b></p>
                                        <ul>
                                            <li>Standard noise levels must be maintained, with no late-night parties.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Setup and Cleanup:</b></p>
                                        <ul>
                                            <li>Must be completed within the rental period unless opting for the additional $50 cleaning service at booking.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Cleaning Fee:</b></p>
                                        <ul>
                                            <li>$50 cleaning fee applies at the booking period unless opting for self-cleaning. A $100 charge is incurred for unsatisfactory self-cleaning.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="tab3" title="Cost, Booking, and Scheduling">
                                <ul className='amenities-content-list'>
                                    <li><p><b>Rental Cost:</b></p>
                                        <ul>
                                            <li>$200 per day. Community businesses may use the space for free for meetings and similar events.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Booking Policy:</b></p>
                                        <ul>
                                            <li>First-come, first-served basis with no minimum advance booking requirement.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Availability:</b></p>
                                        <ul>
                                            <li>No restrictions on hours or days for renting, with access via lock box code. Hosts have access from the night before if no other events are booked.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                        <div className='recommendations-caters-div fadeIn'>
                            <h3 className='mb-4'>Recommendations for Caterers</h3>
                            <ul>
                                <li>
                                    <a href="https://julesbistrostcloud.com/" target="_blank"><span>Jules' Bistro</span></a>
                                </li>
                                <li>
                                    <a href="https://dolsieslunchbox.com/" target="_blank"><span>Dolsies Lunch Box Grille</span></a>
                                </li>
                                <li>
                                    <a href="http://arroymn.com/" target="_blank"><span>Arroy - Thai &amp; Filipino Restaurant</span></a>
                                </li>
                                <li>
                                    <a href="https://shortstopcustomcatering.com/" target="_blank"><span class="elementor-icon-list-text">Custom Catering by Short Stop</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://copperpony.com/" target="_blank"><span>Copper Pony</span></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <p className='event-tab-title fadeInRight'>Little Falls, MN</p>
                        <Tabs
                            defaultActiveKey="tab1"
                            id="uncontrolled-tab-example"
                            fill
                        >
                            <Tab eventKey="tab1" title="Facilities, Amenities, and Decorations">
                                <ul className='amenities-content-list'>
                                    <li><p><b>Maximum Occupancy:</b></p>
                                        <ul>
                                            <li>The space can accommodate up to 30 guests.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Amenities:</b></p>
                                        <ul>
                                            <li>Access to a sink, coffee bar, and refrigerator.</li>
                                            <li>WiFi access available upon request.</li>
                                            <li>One ADA accessible, gender-neutral restroom.</li>
                                            <li>Wheelchair accessible facility.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Furnishings:</b></p>
                                        <ul>
                                            <li>6 round tables (4ft diameter), rectangle tables (7x4ft), and a 7ft long bar.</li>
                                            <li>30 table chairs, 4 “throne” style chairs, and 1 couch.</li>
                                            <li>Note: Tablecloths not provided.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Decoration Policy:</b></p>
                                        <ul>
                                            <li>You are welcome to bring your own decorations. Confetti is allowed, but glitter is not. Decorations, including tape, must be cleaned up after the event.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Space Customization:</b></p>
                                        <ul>
                                            <li>Tables, chairs, and the couch can be rearranged but must be returned to their original places post-event.</li>
                                            <li>*Desks, electronics, and workspace areas should not be touched.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="tab2" title="Rules & Restrictions">
                                <ul className='amenities-content-list'>
                                    <li><p><b>Outside Food:</b></p>
                                        <ul>
                                            <li>Pre-prepared food is allowed; cooking in the space is not permitted.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Noise and Time Guidelines:</b></p>
                                        <ul>
                                            <li>Standard noise levels must be maintained, with no late-night parties.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Setup and Cleanup:</b></p>
                                        <ul>
                                            <li>Must be completed within the rental period unless opting for the additional $50 cleaning service at booking.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Cleaning Fee:</b></p>
                                        <ul>
                                            <li>$50 cleaning fee applies at the booking period unless opting for self-cleaning. A $100 charge is incurred for unsatisfactory self-cleaning.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="tab3" title="Cost, Booking, and Scheduling">
                                <ul className='amenities-content-list'>
                                    <li><p><b>Rental Cost:</b></p>
                                        <ul>
                                            <li>Free. Our space is uniquely dedicated to baby shower registrants and rewards members. Recognizing its dual role as our weekday work area, we are pleased to offer this space at no cost for those who register their baby shower with us. This gesture is our way of valuing your special moments while maintaining the professional integrity of our workspace.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Booking Policy:</b></p>
                                        <ul>
                                            <li>First-come, first-served basis with no minimum advance booking requirement.</li>
                                        </ul>
                                    </li>
                                    <li><p><b>Availability:</b></p>
                                        <ul>
                                            <li>The room is available on Saturdays and Sundays only, within operating business hours.</li>
                                            <li>Saturday: 10:00 a.m – 5:00 p.m.</li>
                                            <li>Sunday: 11:00 a.m – 4:00 p.m.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                        <div className='recommendations-caters-div fadeIn'>
                            <h3 className='mb-4'>Recommendations for Caterers</h3>
                            <ul>
                                <li>
                                    <a href="https://www.attheblacknwhite.com/" target="_blank"><span>A.T. The Black &amp; White</span></a>
                                </li>
                                <li>
                                    <a href="https://www.coborns.com/Cobstore2006?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=gmb&amp;utm_content=little-falls-website" target="_blank"><span>Coborn's</span></a>
                                </li>
                                <li>
                                    <a href="https://www.sanchezburrito320.com/" target="_blank"><span>Sanchez Burrito</span></a>
                                </li>
                                <li>
                                    <a href="https://theroyalcateringlf.com/" target="_blank"><span>The Royal Restaurant &amp; Catering</span></a>
                                </li>
                                <li>
                                    <a href="https://www.subway.com/en-us/?utm_source=google&amp;utm_medium=cpc&amp;utm_term=subway_broad&amp;utm_content=brand&amp;utm_campaign=652725270201&amp;cid=0:0:00:0:nat-us:0&amp;0=0&amp;gad_source=1&amp;gclid=Cj0KCQiAwbitBhDIARIsABfFYIJEKNEU2N71IVFCBRfJcDzB-fLlfFBBv4ag5KLjR2c4mCbMiAAYPY4aAmXtEALw_wcB&amp;gclsrc=aw.ds" target="_blank"><span>Subway</span></a>
                                </li>
                                <li>
                                    <a href="https://www.fallsballroom.com/" target="_blank"><span>The Falls Ballroom Banquet &amp; Catering Services</span></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <StepForm /> */}
            <div className='explore-title fadeIn'><h2 className='text-center'>Reserve Your Date</h2></div>
            <StepForm />
            <div className='space-div'></div>

            <div className='d-flex flex-column align-items-center text-center mb-5 p-4'>
                <div className='explore-title fadeIn mb-3 w-75'><h2 className='text-center'>Haven't Registered for Our Baby Registry Yet?</h2></div>
                <p className='font-color-pink mb-5 mt-4'>Joining our baby registry is a breeze! Whether you're expecting a little one or celebrating a new addition to your family, our registry makes it easy to create a wishlist of your favorite baby products. From adorable onesies to essential baby gear, you can curate your perfect list for showers, birthdays, or any special occasion.</p>
                <button className='create-registry-btn'>Create Your Registry</button>
            </div>
        </div>
    );

}

export default EventSpaces;