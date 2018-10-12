import React from 'react';

import PhotoCarouselPhoto from './PhotoCarouselPhoto';

const PhotoCarousel = ({ photos, focusPhotoIndex, choosePhoto }) => {
  let leftShift = 0;
  let leftMargin = 0;
  if (focusPhotoIndex > 2) {
    leftShift = (focusPhotoIndex * 110) + 50;
    leftMargin = 50;
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
              let focus = 'image-not-in-focus';
              if (focusPhotoIndex === idx) focus = 'image-in-focus';
              return (
                <PhotoCarouselPhoto
                  photo={photo}
                  focus={focus}
                  idx={idx}
                  key={`key${photo.caption}-${photo.img}`}
                  choosePhoto={choosePhoto}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
