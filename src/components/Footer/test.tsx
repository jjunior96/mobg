import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(screen.getByText(/contact/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
