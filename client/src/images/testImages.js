import P1 from './photo1.jpg';
import P2 from './photo2.jpg';
import P3 from './photo3.jpg';
import P4 from './photo4.jpg';
import P5 from './photo5.jpg';
import P6 from './photo6.jpg';
import P7 from './photo7.jpg';
import P8 from './photo8.jpg';
import P9 from './photo9.jpg';
import P10 from './photo10.jpg';
import P11 from './photo11.jpg';
import P12 from './photo12.jpg';
import P13 from './photo13.jpg';
import P14 from './photo14.jpg';
import P15 from './photo15.jpg';
import P16 from './photo16.jpg';
import P17 from './photo17.jpg';

const testImages = [
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
  P12,
  P13,
  P14,
  P15,
  P16,
  P17,
];

// I realize I could map through the testImages array and
// user Faker to generate the Lorem Ipsum.  Decided not to
// do all that work considering this is just test data.

const testImageObjs = [
  {
    img: P2,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: P3,
    caption: 'Et magnis dis parturient montes nascetur ridiculus.',
  },
  {
    img: P4,
    caption: 'Felis eget nunc lobortis mattis aliquam faucibus purus in.',
  },
  {
    img: P5,
    caption: 'Velit scelerisque in dictum non consectetur a erat nam.',
  },
  {
    img: P6,
    caption: 'In fermentum posuere urna nec tincidunt praesent semper feugiat, accumsan lacus vel facilisis volutpat est.',
  },
  {
    img: P7,
    caption: 'Condimentum lacinia quis vel eros donec ac odio tempor.',
  },
  {
    img: P9,
    caption: 'Nibh sit amet commodo nulla facilisi.',
  },
  {
    img: P10,
    caption: 'Molestie nunc non blandit massa enim nec dui nunc, sit amet porttitor eget dolor morbi non arcu risus quis.',
  },
  {
    img: P11,
    caption: 'Elit pellentesque habitant morbi tristique senectus et netus et.',
  },
  {
    img: P12,
    caption: 'Iaculis urna id volutpat lacus laoreet non curabitur.',
  },
  {
    img: P13,
    caption: 'Elit pellentesque habitant morbi tristique.',
  },
  {
    img: P14,
    caption: 'Tellus at urna condimentum mattis pellentesque id nibh.',
  },
  {
    img: P15,
    caption: 'Scelerisque felis imperdiet proin fermentum leo vel orci porta non.',
  },
  {
    img: P16,
    caption: 'Eu sem integer.',
  },
  {
    img: P17,
    caption: 'Habitant morbi tristique senectus et netus et malesuada, aliquam faucibus purus in massa.',
  },
];

export default testImageObjs;
