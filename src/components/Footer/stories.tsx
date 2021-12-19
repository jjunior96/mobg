import { Story, Meta } from '@storybook/react/types-6-0';

import Footer from '.';

export default {
  title: 'Footer',
  component: Footer
} as Meta;

export const Default: Story = () => (
  <div style={{ marginTop: '1.6rem' }}>
    <Footer />
  </div>
);
