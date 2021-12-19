import { Story, Meta } from '@storybook/react/types-6-0';

import CardType, { CardTypeProps } from '.';
import { CardTypeMock } from './mock';

export default {
  title: 'CardType',
  component: CardType,
  args: CardTypeMock[0]
} as Meta;

export const Default: Story<CardTypeProps> = (args) => <CardType {...args} />;
