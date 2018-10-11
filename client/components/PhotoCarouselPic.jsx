import React from 'react';

// Need to add 'alt' for image

const PhotoCarouselPic = props => (
  <li>
    <img src={props.pic} alt='to be filled' className='photo-carousel-image' />
  </li>
);

export default PhotoCarouselPic;
