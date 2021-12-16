import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Logo />);

    expect(screen.getByText(/mobg/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
