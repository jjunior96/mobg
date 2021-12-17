import { v4 } from 'uuid';

import { CardProps } from '.';

export const CardMock: CardProps[] = [
  {
    id: v4(),
    type: 'house',
    location: 'Avenida Brasil',
    price: '1.160',
    meters: 64,
    rooms: 2,
    garage: 2,
    img: '/img/house-1.jpeg'
  },
  {
    id: v4(),
    type: 'apartment',
    location: 'Avenida Uruguai',
    price: '1.000',
    meters: 58,
    rooms: 2,
    garage: 1,
    img: '/img/house-1.jpeg'
  },
  {
    id: v4(),
    type: 'house',
    location: 'Avenida Brasil',
    price: '2.310',
    meters: 140,
    rooms: 4,
    garage: 4,
    img: '/img/house-1.jpeg'
  }
];
