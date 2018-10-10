import React from 'react';

const PhotoSelector = props => (
  <div className='photo-selector fc fd-c'>
    <div className='caption'>
      Caption goes here
    </div>
    <div className='center-photo-selector fc'>
      <button type='button' className='left-button'>
        Left arrow
      </button>
      <img src={props.pic} />
      <button type='button' className='right-button'>
        Right arrow
      </button>
    </div>
  </div>
);

export default PhotoSelector;
