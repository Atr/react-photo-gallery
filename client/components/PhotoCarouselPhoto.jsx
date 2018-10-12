import React from 'react';

const PhotoCarouselPhoto = ({ photo, focus }) => {
  const classList = `photo-carousel-list-item  ${focus}`;
  return (
    <li className={classList}>
      <img src={photo.img} alt={photo.caption} className='photo-carousel-image' />
    </li>
  );
};

export default PhotoCarouselPhoto;
