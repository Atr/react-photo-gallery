import React from 'react';

import PhotoCarouselPhoto from './PhotoCarouselPic';

const PhotoCarousel = props => (
  <div className='photo-carousel fc jc-c'>
    <div className='photo-carousel-container-wrapper fc jc-c'>
      <div className='fc photo-carousel-container'>
        <ul className='fc photo-carousel-ul'>
          {props.photos.map(photo => <PhotoCarouselPhoto photo={photo} />)}
        </ul>
      </div>
    </div>
  </div>
);

export default PhotoCarousel;
