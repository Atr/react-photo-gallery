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
    this.cycleWithKeyboard = this.cycleWithKeyboard.bind(this);

    this.state = {
      allPhotos: photos,
      focusPhotoIndex: 0,
      windowWidth: 0,
    };
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
    });
    document.addEventListener('keydown', this.cycleWithKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.cycleWithKeyboard);
  }

  cycleRight() {
    const { allPhotos, focusPhotoIndex } = this.state;
    if (focusPhotoIndex < allPhotos.length - 1) {
      const newFocusIdx = focusPhotoIndex + 1;
      this.setState({
        focusPhotoIndex: newFocusIdx,
        windowWidth: window.innerWidth,
      });
    }
  }

  cycleLeft() {
    const { focusPhotoIndex } = this.state;
    if (focusPhotoIndex > 0) {
      const newFocusIdx = focusPhotoIndex - 1;
      this.setState({
        focusPhotoIndex: newFocusIdx,
        windowWidth: window.innerWidth,
      });
    }
  }

  cycleWithKeyboard(e) {
    if (e.key === 'ArrowLeft') {
      this.cycleLeft();
    } else if (e.key === 'ArrowRight') {
      this.cycleRight();
    }
  }

  choosePhoto(e) {
    const newFocusIdx = +e.target.id;
    this.setState({
      focusPhotoIndex: newFocusIdx,
      windowWidth: window.innerWidth,
    });
  }

  render() {
    const { allPhotos, focusPhotoIndex, windowWidth } = this.state;
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
          windowWidth={windowWidth}
        />
      </div>
    );
  }
}

export default PhotoGallery;
