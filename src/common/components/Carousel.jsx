// import Swiper core and required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import './styles/Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({
  containerStyle,
  slideStyle,
  imgStyle,
  textStyle,
  subTextStyle,
  isSmallScreen = false,
  slideWrapperStyle,
  centeredSlides,
  content = [],
  isSlideSkip = false,
  customComponent,
  isPagination,
  isNavigation = true,
  slidesPerView,
  spaceBetween,
  isTitled = false }) => {
  const paginationSettings = isPagination ? {
    clickable: true
  } : false;
  return (
    <Swiper
      isSmallScreen={isSmallScreen}
      centeredSlides={centeredSlides}
      navigation={isNavigation}
      loop={true}
      pagination={paginationSettings}
      slidesPerView={slidesPerView}
      slidesPerGroupSkip={isSlideSkip ? slidesPerView : undefined}
      slidesPerGroup={isSlideSkip ? slidesPerView : undefined}
      spaceBetween={spaceBetween}
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      className={containerStyle}
    >
      {content.map((slide, i) => (
        <SwiperSlide key={slide.slideId} className={slideStyle} >
          {isTitled ? <div className={`d-flex flex-column ${slideWrapperStyle ? slideWrapperStyle : ''}`}>
            <a href={slide?.navLink}><img key={i} src={slide.imageURL} className={imgStyle} alt='slider content' /></a>
            <p className={textStyle}>{slide?.slideTitle}</p>
            {slide?.slideSubTitle ? <p className={subTextStyle}>{slide?.slideSubTitle}</p> : ''}
            {customComponent}
          </div> : (<a href={slide?.navLink}><img key={i} src={slide.imageURL} alt='slider content' /></a>)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;