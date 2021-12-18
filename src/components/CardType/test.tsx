import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import CardType from '.';

describe('<CardType />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardType />);

    expect(
      screen.getByRole('heading', { name: /CardType/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
