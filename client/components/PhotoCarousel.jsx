import React from 'react';

import PhotoCarouselPic from './PhotoCarouselPic';

const PhotoCarousel = props => (
  <div className='fc photo-carousel'>
    <ul className='fc photo-carousel-ul'>
      {props.pics.map(pic => <PhotoCarouselPic pic={pic} />)}
    </ul>
  </div>
);

export default PhotoCarousel;
