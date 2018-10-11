import React, { Component } from 'react';

import PhotoSelector from './PhotoSelector';
import PhotoCarousel from './PhotoCarousel';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    // bind area

    this.state = {

    };
  }

  render() {
    return (
      <div className='gallery'>
        <PhotoSelector pic={this.props.pics[0]} />
        <PhotoCarousel pics={this.props.pics} />
      </div>
    );
  }
};

export default PhotoGallery;
