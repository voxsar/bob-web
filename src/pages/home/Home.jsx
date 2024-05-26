import React from 'react';
import './Home.css'
import ShopSection from './shopSection';
import Carousel from '../../common/components/Carousel';
import ShopAll from './shopAll';

const content = [
  {
    slideId: 1,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/veer-switchback-system.png',
  },
  {
    slideId: 2,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/romina-uptown-crib-collection.png',
  },
  {
    slideId: 3,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/oilo-flynn-recliner.png',
  },
  {
    slideId: 4,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/masimo-stork-vitals-plus.png',
  }, {
    slideId: 5,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/uppababy-remi.png',
  },
  {
    slideId: 6,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/uppababy-remi.png',
  },
  {
    slideId: 7,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/uppababy-remi.png',
  },
  {
    slideId: 8,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/uppababy-remi.png',
  },
  {
    slideId: 9,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/uppababy-remi.png',
  },
  {
    slideId: 10,
    imageURL: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/01/uppababy-remi.png',
  }
]

const Home = () => {
  return (
    <div className='page-wrapper'>
      <Carousel content={content} />
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
    </div>
  );
}

export default Home;