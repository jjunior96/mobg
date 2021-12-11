import { AiOutlineHeart as HeartIcon } from 'react-icons/ai';
import { FiLogIn as LoginIcon } from 'react-icons/fi';

import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '40rem',
          margin: '0 auto',
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  argTypes: {
    as: {
      type: ''
    },
    href: {
      type: ''
    },
    icon: {
      type: ''
    }
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Enter'
};

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />;

withIcon.args = {
  children: 'Enter',
  icon: <LoginIcon />
};

export const minimal: Story<ButtonProps> = (args) => <Button {...args} />;

minimal.args = {
  children: 'Enter',
  minimal: true,
  icon: <HeartIcon />
};

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />;

asLink.args = {
  children: 'Enter',
  as: 'a',
  href: '/link'
};
