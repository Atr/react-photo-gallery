import _ from 'lodash';
import './styles.css';

const component = () => {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('test');

  return element;
}

document.body.appendChild(component());