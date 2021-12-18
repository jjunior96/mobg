import { Story, Meta } from '@storybook/react/types-6-0';

import CardType from '.';

export default {
  title: 'CardType',
  component: CardType
} as Meta;

export const Default: Story = () => <CardType />;
