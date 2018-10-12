import React from 'react';

const PhotoSelector = ({ photo, cycleLeft, cycleRight}) => (
  <div className='photo-selector fc fd-c ai-c'>
    <div className='caption'>
      Caption goes here
    </div>
    <div className='center-photo-selector fc ai-c jc-sb'>
      <button type='button' className='left-selector-button' onClick={cycleLeft}>
        Left arrow
      </button>
      <div className='center-image-container fc jc-c ai-c'>
        <img src={photo.img} alt={photo.caption} className='center-image' />
      </div>
      <button type='button' className='right-selector-button' onClick={cycleRight}>
        Right arrow
      </button>
    </div>
  </div>
);

export default PhotoSelector;
