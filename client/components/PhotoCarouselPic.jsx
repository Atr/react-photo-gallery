import React from 'react';

const PhotoCarouselPhoto = props => (
  <li className='photo-carousel-list-item'>
    <img src={props.photo.img} alt={props.photo.caption} className='photo-carousel-image' />
  </li>
);

export default PhotoCarouselPhoto;
