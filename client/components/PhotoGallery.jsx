import React, { Component } from 'react';

import PhotoSelector from './PhotoSelector';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    // bind area

    this.state = {

    };
  }

  render() {
    return (
      <PhotoSelector pic={this.props.pics[0]} />
    );
  }
};

export default PhotoGallery;
