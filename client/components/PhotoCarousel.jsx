import React from 'react';

import PhotoCarouselPic from './PhotoCarouselPic';

const PhotoCarousel = props => (
  <div className='photo-carousel fc jc-c'>
    <div className='photo-carousel-container-wrapper fc jc-c'>
      <div className='fc photo-carousel-container'>
        <ul className='fc photo-carousel-ul'>
          {props.pics.map(pic => <PhotoCarouselPic pic={pic} />)}
        </ul>
      </div>
    </div>
  </div>
);

export default PhotoCarousel;
