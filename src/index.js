import _ from 'lodash';
import './styles.css';
import Pi from './pi.png';

const component = () => {
  let element = document.createElement('div');

  let textElement = document.createElement('div');
  textElement.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  let pictureElement = document.createElement('div');
  let pIcon = new Image();
  pIcon.src = Pi;
  pictureElement.appendChild(pIcon);

  element.appendChild(textElement);
  element.appendChild(pictureElement);

  element.classList.add('test');

  return element;

  // let element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('test');

  // let pIcon = new Image();
  // pIcon.src = Pi;
  // element.appendChild(pIcon);

  // return element;
}

document.body.appendChild(component());