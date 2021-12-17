import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Card from '.';
import { CardMock } from './mock';

const props = CardMock[0];

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Card {...props} />);

    expect(screen.getByRole('heading', { name: /Card/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
