import React from 'react';

// Need to add 'alt' for image

const PhotoSelector = props => (
  <div className='photo-selector fc fd-c ai-c'>
    <div className='caption'>
      Caption goes here
    </div>
    <div className='center-photo-selector fc ai-c jc-sb'>
      <button type='button' className='left-selector-button'>
        Left arrow
      </button>
      <div className='center-image-container fc jc-c ai-fs'>
        <img src={props.photo} alt='to be filled' className='center-image' />
      </div>
      <button type='button' className='right-selector-button'>
        Right arrow
      </button>
    </div>
  </div>
);

export default PhotoSelector;
