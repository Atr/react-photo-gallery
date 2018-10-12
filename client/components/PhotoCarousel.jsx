import React from 'react';

import PhotoCarouselPhoto from './PhotoCarouselPhoto';

const PhotoCarousel = props => {
  const leftMargin = props.focusPhotoIndex * -75;
  
  // This works, but is crude:
  // style={{marginLeft: leftMargin + 'px'}}

  // Need to refactor the below to accept an input:
  // style={{transform: 'translateX(-100px)'}}

  return (
    <div className='photo-carousel fc jc-c'>
      <div className='photo-carousel-container-wrapper fc jc-c'>
        <div className='fc photo-carousel-container'>
          <ul className='fc photo-carousel-ul'>
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
