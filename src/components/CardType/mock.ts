import { v4 } from 'uuid';

import { CardTypeProps } from '.';

export const CardTypeMock: CardTypeProps[] = [
  {
    id: v4(),
    type: 'Apartamentos',
    description: 'Lofts, studios, kitnets...',
    amount: 126,
    link: '#',
    img: '/img/house-1.jpeg'
  }
];
