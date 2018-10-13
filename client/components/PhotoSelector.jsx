import React from 'react';

import LeftArrow from '../src/images/arrow-left.svg';
import RightArrow from '../src/images/arrow-right.svg';

const PhotoSelector = ({ photo, cycleLeft, cycleRight }) => (
  <div className='photo-selector fc fd-c ai-c'>
    <div className='caption fc jc-c'>
      <div className='caption-container'>
        <p>
          {photo.caption}
        </p>
      </div>
    </div>
    <div className='center-photo-selector fc ai-c jc-sb'>
      <button type='button' className='left-selector-button ai-s' onClick={cycleLeft}>
        <img src={LeftArrow} alt='left arrow icon' className='arrow' />
      </button>
      <div className='center-image-container fc jc-c ai-c'>
        <img src={photo.img} alt={photo.caption} className='center-image' />
      </div>
      <button type='button' className='right-selector-button ai-s' onClick={cycleRight}>
        <img src={RightArrow} alt='right arrow icon' className='arrow'/>
      </button>
    </div>
  </div>
);

export default PhotoSelector;
