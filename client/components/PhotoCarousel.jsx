import React from 'react';

import PhotoCarouselPhoto from './PhotoCarouselPhoto';

const PhotoCarousel = props => {
  const leftShift = (props.focusPhotoIndex * 110) + 50;
  return (
    <div className='photo-carousel fc jc-c'>
      <div className='photo-carousel-container-wrapper fc jc-c'>
        <div className='fc photo-carousel-container'>
          <ul className='fc photo-carousel-ul' style={{ transform: `translateX(-${leftShift}px)` }}>
            {props.photos.map( (photo, idx) => {
              if (props.focusPhotoIndex === idx) {
                return <PhotoCarouselPhoto photo={photo} key={`key${photo.caption}-${photo.img}`} focus={'image-in-focus'} />
              }
              return <PhotoCarouselPhoto photo={photo} key={`key${photo.caption}-${photo.img}`} focus={'image-not-in-focus'} />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
