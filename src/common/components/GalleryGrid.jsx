import React from 'react';
import './styles/GalleryGrid.css';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-fullscreen.css';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

const GalleryGrid = ({ imageList, tabKey }) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                showZoomInOutIcons={true}
                actualSize={false}
                zoomFromOrigin={true}
                plugins={[lgZoom, lgShare, lgFullscreen]}
                download={false}
                mobileSettings={{
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false,
                }}
            >
                {imageList.map((image) => (
                    <a href={image}
                    // data-pinterest-text="Pin it"
                    // data-tweet-text="lightGallery slide  2"
                    >
                        <div className='gallery-img-container' >
                            <img alt="img1" src={image} className='popIn' />
                        </div>
                    </a>
                ))}
            </LightGallery>
        </div >
    );
}

export default GalleryGrid;