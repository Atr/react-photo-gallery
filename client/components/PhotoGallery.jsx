import React, { Component } from 'react';

import PhotoSelector from './PhotoSelector';
import PhotoCarousel from './PhotoCarousel';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    const { photos } = this.props;

    this.cycleRight = this.cycleRight.bind(this);
    this.cycleLeft = this.cycleLeft.bind(this);
    this.choosePhoto = this.choosePhoto.bind(this);

    this.state = {
      allPhotos: photos,
      focusPhotoIndex: 0,
    };
  }

  cycleRight() {
    const { allPhotos, focusPhotoIndex } = this.state;
    if (focusPhotoIndex < allPhotos.length - 1) {
      const newFocusIdx = focusPhotoIndex + 1;
      this.setState({
        focusPhotoIndex: newFocusIdx,
      });
    }
  }

  cycleLeft() {
    const { focusPhotoIndex } = this.state;
    if (focusPhotoIndex > 0) {
      const newFocusIdx = focusPhotoIndex - 1;
      this.setState({
        focusPhotoIndex: newFocusIdx,
      });
    }
  }

  choosePhoto(e) {
    const newFocusIdx = +e.target.id;
    this.setState({
      focusPhotoIndex: newFocusIdx,
    });
  }

  render() {
    const { allPhotos, focusPhotoIndex } = this.state;
    const focusPhoto = allPhotos[focusPhotoIndex];

    return (
      <div className='gallery fc fd-c jc-c ai-c'>
        <PhotoSelector
          photo={focusPhoto}
          cycleRight={this.cycleRight}
          cycleLeft={this.cycleLeft}
        />
        <PhotoCarousel
          photos={allPhotos}
          focusPhotoIndex={focusPhotoIndex}
          choosePhoto={this.choosePhoto}
        />
      </div>
    );
  }
}

export default PhotoGallery;
