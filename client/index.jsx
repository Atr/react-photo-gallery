import React from 'react';
import ReactDOM from 'react-dom';
import './src/styles/styles.css';

import PhotoGallery from './components/PhotoGallery.jsx';

import images from './src/images/testImages.js';

ReactDOM.render(<PhotoGallery pics={images} />, document.getElementById('app'));
