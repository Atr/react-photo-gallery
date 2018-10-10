import React from 'react';
import ReactDOM from 'react-dom';
import './src/styles/styles.css';

import PhotoGallery from './components/PhotoGallery';

import images from './src/images/testImages';

ReactDOM.render(<PhotoGallery pics={images} />, document.getElementById('app'));
