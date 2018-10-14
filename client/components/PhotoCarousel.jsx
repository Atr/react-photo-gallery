import React from 'react';

import PhotoCarouselPhoto from './PhotoCarouselPhoto';

const PhotoCarousel = ({ photos, focusPhotoIndex, choosePhoto, windowWidth }) => {
  const photoCarouselPhotoWidth = 100; // px - Should match width set in photo-carousel-list-item
  const photoCarouselPhotoMargin = 10; // px - Should match margin set in photo-carousel-list-item
  const mainPhotoMaxWidth = 700; // px - Should match max-width of center-image-container

  // The decimals in 'offSetPx' are to derive the width of the center image,
  // so that I can center the corresponding carousel picture.
  let leftShift = 0;
  const offSetPx = Math.min(windowWidth * 0.9 * 0.9 * 0.9 * 0.8 * 0.5, mainPhotoMaxWidth / 2);
  const photoShiftPx = (focusPhotoIndex
      * (photoCarouselPhotoWidth + photoCarouselPhotoMargin))
      + (photoCarouselPhotoWidth / 2);
  const maxPx = photos.length * (photoCarouselPhotoWidth + photoCarouselPhotoMargin);
  
  // Below if statements correctly set the leftShift px to be within bounds.
  if (photoShiftPx > offSetPx) {
    leftShift = photoShiftPx - offSetPx;
  }
  if (offSetPx > (maxPx - photoShiftPx)) {
    leftShift = maxPx - (offSetPx * 2) - photoCarouselPhotoMargin;
  }
  return (
    <div className='photo-carousel fc jc-c'>
      <div className='photo-carousel-container-wrapper fc jc-c'>
        <div className='fc photo-carousel-container'>
          <ul
            className='fc photo-carousel-ul'
            style={{ transform: `translateX(-${leftShift}px)` }}
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
