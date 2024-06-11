import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from '../../common/components/Carousel';
import { prodCategory } from '../../common/data';
import { CATEGORY_IMAGES } from '../../assets/assets';

const ShopAll = ({ isSmallScreen }) => {

    return isSmallScreen ? (
        <div className='mt-5 d-flex flex-column align-items-center'>
            <Carousel
                content={prodCategory}
                isPagination={true}
                isSmallScreen={true}
                slidesPerView={1.5}
                spaceBetween={10}
                slideWrapperStyle={'shop-category'}
                containerStyle={'shop-category-container-mobile'}
                imgStyle={'shop-category-img'}
                isTitled={true}
                centeredSlides={true}
            />
            <a href='/' className='shop-all-btn mt-3'>
                Shop All
            </a>
        </div>
    ) : (
        <Container className='shop-category-container'>
            <a href='/' className='shop-all-btn'>
                Shop All
            </a>
            <Row className='justify-content-center'>
                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category1} alt='' />
                        <h4>Baby Health $ Safety</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category2} alt='' />
                        <h4>Bath & Potty</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category3} alt='' />
                        <h4>Breastfeeding</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category4} alt='' />
                        <h4>Clothing & Accessories</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category5} alt='' />
                        <h4>Gear</h4>
                    </a>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category6} alt='' />
                        <h4>HSA/FSA Approved Items</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category7} alt='' />
                        <h4>Maternity & Postpartum</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category8} alt='' />
                        <h4>Meal Time</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category9} alt='' />
                        <h4>Nursery Furniture & Sleep</h4>
                    </a>
                </Col>

                <Col style={{ maxWidth: 'fit-content' }}>
                    <a className='shop-category' href="/test">
                        <img className='shop-category-img' src={CATEGORY_IMAGES.category10} alt='' />
                        <h4>Toys & Play</h4>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default ShopAll;