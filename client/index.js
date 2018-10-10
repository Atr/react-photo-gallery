import _ from 'lodash';

import './src/styles/styles.css';
import './src/styles/appStyles.scss';
import Pi from './src/images/pi.png';
import Anchor from './src/images/anchor.svg';

const component = () => {
  let element = document.createElement('div');

  let textElement = document.createElement('div');
  textElement.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  let pictureElement = document.createElement('div');
  let pIcon = new Image();
  pIcon.src = Pi;
  pictureElement.appendChild(pIcon);

  let anchorElement = document.createElement('div');
  let anchorSvg = new Image();
  anchorSvg.src = Anchor;
  anchorElement.classList.add('anchor');
  anchorElement.appendChild(anchorSvg);


  element.appendChild(textElement);
  element.appendChild(pictureElement);
  element.appendChild(anchorElement);

  element.classList.add('test');


  return element;
}

document.body.appendChild(component());