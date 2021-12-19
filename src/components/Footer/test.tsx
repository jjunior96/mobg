import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />);

    // Logo
    expect(screen.getByRole('heading', { name: /mobg/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
