import React from 'react';

import PhotoCarouselPhoto from './PhotoCarouselPhoto';

const PhotoCarousel = ({ photos, focusPhotoIndex }) => {
  let leftShift;
  let leftMargin;
  if (focusPhotoIndex > 2) {
    leftShift = (focusPhotoIndex * 110) + 50;
    leftMargin = 50;
  } else {
    leftShift = 0;
    leftMargin = 0;
  }
  return (
    <div className='photo-carousel fc jc-c'>
      <div className='photo-carousel-container-wrapper fc jc-c'>
        <div className='fc photo-carousel-container'>
          <ul
            className='fc photo-carousel-ul'
            style={{ transform: `translateX(-${leftShift}px)`, marginLeft: `${leftMargin}%` }}
          >
            {photos.map((photo, idx) => {
              if (focusPhotoIndex === idx) {
                return <PhotoCarouselPhoto photo={photo} key={`key${photo.caption}-${photo.img}`} focus='image-in-focus' />;
              }
              return <PhotoCarouselPhoto photo={photo} key={`key${photo.caption}-${photo.img}`} focus='image-not-in-focus' />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
