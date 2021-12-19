import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import CardType from '.';
import { CardTypeMock } from './mock';

const props = CardTypeMock[0];

describe('<CardType />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardType {...props} />);

    expect(screen.getByText(/apartamentos/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
