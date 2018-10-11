import React from 'react';

import PhotoCarouselPic from './PhotoCarouselPic';

const PhotoCarousel = props => (
  <div className='photo-carousel fc jc-c'>
    <div className='photo-carousel-container-wrapper fc jc-c test-3'>
      <div className='fc photo-carousel-container test-4'>
        <ul className='fc photo-carousel-ul test-1'>
          {props.pics.map(pic => <PhotoCarouselPic pic={pic} />)}
        </ul>
      </div>
    </div>
  </div>
);


// const PhotoCarousel = props => (
//   <div className='photo-carousel fc jc-c test-2'>
    
//       <div className='fc photo-carousel-container test-4'>
//         <ul className='fc photo-carousel-ul'>
//           {props.pics.map(pic => <PhotoCarouselPic pic={pic} />)}
//         </ul>
//       </div>
    
//   </div>
// );

export default PhotoCarousel;
