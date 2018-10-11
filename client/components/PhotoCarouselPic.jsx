import React from 'react';

// Need to add 'alt' for image

const PhotoCarouselPhoto = props => (
  <li className='photo-carousel-list-item'>
    <img src={props.photo} alt='to be filled' className='photo-carousel-image' />
  </li>
);

export default PhotoCarouselPhoto;
