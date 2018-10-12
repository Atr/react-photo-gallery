import React from 'react';

const PhotoCarouselPhoto = props => {
  const classList = 'photo-carousel-list-item ' + props.focus;
  console.log(classList);
  return (
    <li className={classList}>
      <img src={props.photo.img} alt={props.photo.caption} className='photo-carousel-image' />
    </li>
  )
};

export default PhotoCarouselPhoto;
