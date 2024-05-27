// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';
import './styles/Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({ containerStyle, slideStyle, content = [] }) => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation, Autoplay]}
      style={{ height: '700px', margin: '20px 0px', padding: '10px' }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
    >
      {content.map((slide, i) => (
        <SwiperSlide key={slide.slideId} ><img key={i} src={slide.imageURL} alt='slider content' /></SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;