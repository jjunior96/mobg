import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Button from '.';

describe('<Button />', () => {
  it('should render a button default', () => {
    const { container } = renderWithTheme(<Button>Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '5.6rem',
      'background-color': theme.colors.primary,
      color: theme.colors.white
    });

    expect(container).toMatchSnapshot();
  });

  it('should render a button with size small', () => {
    renderWithTheme(<Button size="small">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '2.4rem'
    });
  });

  it('should render a button with size large', () => {
    renderWithTheme(<Button size="large">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '5.6rem'
    });
  });

  it('should render a button with color primary', () => {
    renderWithTheme(<Button color="primary">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      'background-color': theme.colors.primary
    });
  });

  it('should render a button with color secundary', () => {
    renderWithTheme(<Button color="secundary">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      'background-color': theme.colors.gray_200
    });
  });

  it('should render a minimal version', () => {
    renderWithTheme(<Button minimal>Enter</Button>);

    expect(screen.getByRole('button', { name: /Enter/i })).toHaveStyle({
      background: 'none',
      color: theme.colors.blue_200
    });
  });

  it('should render a button as a link (<a/>)', () => {
    renderWithTheme(
      <Button color="secundary" as="a" href="/">
        Enter
      </Button>
    );

    expect(screen.getByRole('link', { name: /Enter/i })).toHaveAttribute(
      'href',
      '/'
    );
  });
});
