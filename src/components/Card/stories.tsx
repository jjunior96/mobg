import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { CardProps } from '.';
import { CardMock } from './mock';

export default {
  title: 'Card',
  component: Card,
  args: CardMock[0]
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args} />;
