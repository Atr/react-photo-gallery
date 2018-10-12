import React from 'react';

const PhotoCarouselPhoto = ({ photo, focus, idx, choosePhoto }) => {
  const classList = `photo-carousel-list-item  ${focus}`;
  return (
    <li className={classList}>
      <img
        src={photo.img}
        alt={photo.caption}
        className='photo-carousel-image'
        id={idx}
        onClick={choosePhoto}
      />
    </li>
  );
};

export default PhotoCarouselPhoto;
