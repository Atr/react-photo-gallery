import React, { Component } from 'react';

import PhotoSelector from './PhotoSelector';
import PhotoCarousel from './PhotoCarousel';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    // bind area

    this.state = {
      allPics: this.props.photos,
    };
  }

  render() {
    return (
      <div className='gallery fc fd-c jc-c ai-c'>
        <PhotoSelector photo={this.props.photos[0]} />
        <PhotoCarousel photos={this.props.photos} />
      </div>
    );
  }
};

export default PhotoGallery;
