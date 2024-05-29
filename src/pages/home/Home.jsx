import React from 'react';
import './Home.css'
import ShopSection from './shopSection';
import Carousel from '../../common/components/Carousel';
import ShopAll from './shopAll';
import ProductGrid from '../../common/components/ProductGrid';
import { bestSellingProd, bobMostLoved, featuredProducts, moreToRead, productBrands, products, recommendedProd, topCarouselContent } from '../../common/data';
import { Row, Col } from 'react-bootstrap';
import info1 from '../../assets/icons/info1.webp';
import info2 from '../../assets/icons/info2.webp';
import info3 from '../../assets/icons/info3.webp';
import info4 from '../../assets/icons/info4.webp';


const Home = () => {

  return (
    <div className='page-wrapper'>
      <div className='top-carousel-wrapper'>
        <Carousel content={topCarouselContent} containerStyle={'top-carousel-container'} />
      </div>
      <ShopAll />
      <ShopSection />
      <div className='space-div'></div>

      {/* Nursery in a box */}
      <div className='nursery-box-container'>
        <div className='nursery-box-top-div'><p className='m-0'>Your Complete Nursery, One Box Away.</p></div>
        <div className='video-background-container'>
          <video src="https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/03/Nursery-In-A-Box-Product-Videosml.mp4#t=4" autoPlay loop muted playsInline className="video-background" />
          <button className='shop-nursery-btn'>Shop Nursery In A Box</button>
        </div>
      </div>

      {/* top 3 fav */}
      <div className='featured-prod-container'>
        <Row className='d-flex align-items-center'>
          <Col lg={4} className='d-flex justify-content-center'>
            <img src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/02/MicrosoftTeams-image-768x663-removebg-preview.png' className='featured-logo' alt='toys-treat-logo' />
          </Col>
          <Col lg={8}>
            <Carousel
              content={featuredProducts}
              isNavigation={false}
              isPagination={true}
              slidesPerView={3}
              isSlideSkip={true}
              spaceBetween={30}
              containerStyle={'featured-carousel-container'}
              imgStyle={'featured-carousel-img'}
              slideStyle={'featured-carousel-slide'}
              textStyle={'featured-carousel-txt'}
              subTextStyle={'featured-carousel-sub-txt'}
              isTitled={true} />
          </Col>
        </Row>
      </div>

      {/* Brands section */}
      <div className='recommended-prod-container brand-section-container'>
        <div className='d-flex flex-row align-items-center justify-content-center mb-2'>
          <h2>Discover Brands</h2>
        </div>
        <Carousel
          content={productBrands}
          isPagination={true}
          isNavigation={false}
          slidesPerView={5}
          spaceBetween={20}
          // containerStyle={'most-loved-carousel-container'}
          imgStyle={'brands-carousel-img'}
          // slideStyle={'most-loved-carousel-slide'}
          isTitled={false} />
      </div>

      {/* Most loved products */}
      <div className='most-loved-prod-container'>
        <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
          <div></div>
          <h2 className='ps-5 pb-5'>BOB's Most Loved</h2>
          <a href='/' className='shop-all-btn'>
            View All
          </a>
        </div>
        <Carousel
          content={bobMostLoved}
          isPagination={true}
          slidesPerView={5}
          spaceBetween={20}
          containerStyle={'most-loved-carousel-container'}
          imgStyle={'most-loved-carousel-img'}
          slideStyle={'most-loved-carousel-slide'}
          isTitled={true} />

      </div>

      {/* product grid */}
      <ProductGrid products={products} />

      {/* Best selling products */}
      <div className='recommended-prod-container'>
        <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
          <div></div>
          <h2 className='ps-5 pb-5'>Best Selling Products</h2>
          <a href='/' className='shop-all-btn'>
            Shop All
          </a>
        </div>
        <Carousel
          content={bestSellingProd}
          isPagination={true}
          slidesPerView={4}
          spaceBetween={20}
          containerStyle={'best-selling-carousel-container'}
          imgStyle={'best-selling-carousel-img'}
          slideStyle={'most-loved-carousel-slide'}
          textStyle={'best-selling-carousel-text'}
          isTitled={true} />
      </div>

      {/* Recommended */}
      <div className='recommended-prod-container'>
        <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
          <div></div>
          <h2 className='ps-5 pb-5'>Recommend Just For You</h2>
          <a href='/' className='shop-all-btn'>
            Shop All
          </a>
        </div>
        <div>
          <Row>
            {
              recommendedProd.map((prod) => (
                <Col lg={4} className='p-0'>
                  <a href='/'><img src={prod.prodUrl} alt='recommended product' className='recommended-img' /></a>
                  <a href='/' className='recommended-title'><p className='mt-4'>{prod.prodTitle}</p></a>
                </Col>
              ))
            }
          </Row>
        </div>
      </div>

      {/* More to read */}
      <div className='most-loved-prod-container'>
        <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
          <div></div>
          <h2 className='ps-5 pb-5'>More To Read</h2>
          <a href='/' className='shop-all-btn'>
            View All
          </a>
        </div>
        <Carousel
          content={moreToRead}
          isPagination={true}
          isNavigation={false}
          slidesPerView={4}
          spaceBetween={20}
          slideWrapperStyle={'more-read-carousel-wrapper'}
          containerStyle={'more-read-carousel-container'}
          imgStyle={'more-read-carousel-img'}
          slideStyle={'more-read-carousel-slide '}
          textStyle={'more-read-carousel-text'}
          customComponent={
            <div className='d-flex flex-column'>
              <div className='more-read-carousel-divider'></div>
              <a href='/' className='more-read-carousel-button'>Learn More</a>
            </div>
          }
          isTitled={true} />

      </div>

      {/* Gift card and Info */}
      <div className='mt-5 mb-3 p-2'>
        <a href='/'><img src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/03/2010.png' alt='gift-card' className='w-100' /></a>
      </div>
      <div className='recommended-prod-container bottom-info-container d-flex justify-content-center mb-5'>
        <Row className='w-85'>
          <Col lg={3} className='d-flex flex-column align-items-center text-center'>
            <img src={info1} alt='info-1' height={75} width={75} className='mb-3' />
            <p className='mb-3'>2 Locations</p>
            <small>Explore our products firsthand in Little Falls, MN and St. Cloud, MN, for a personalized shopping experience.</small>
          </Col>
          <Col lg={3} className='d-flex flex-column align-items-center text-center'>
            <img src={info2} alt='info-1' height={75} width={75} className='mb-3' />
            <p className='mb-3'>Flat Rate Shipping</p>
            <small>One simple rate for all orders. Shop more, worry less about shipping costs.</small>
          </Col>
          <Col lg={3} className='d-flex flex-column align-items-center text-center'>
            <img src={info3} alt='info-1' height={75} width={75} className='mb-3' />
            <p className='mb-3'>Gift Wrapping</p>
            <small className='mb-3'>Gift wrapping options are available at checkout.</small>
            <small>*Large items are excluded</small>
          </Col>
          <Col lg={3} className='d-flex flex-column align-items-center text-center'>
            <img src={info4} alt='info-1' height={75} width={75} className='mb-3' />
            <p className='mb-3'>Shop with Payments</p>
            <small>Buy now, pay later. Spread your payments over time, making shopping easier on your budget.</small>
          </Col>

        </Row>
      </div>

    </div>
  );
}

export default Home;