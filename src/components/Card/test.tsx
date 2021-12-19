import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Card from '.';
import { CardMock } from './mock';

const props = CardMock[0];

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Card {...props} />);

    // Imagem
    expect(screen.getByRole('img', { name: /foto/i })).toHaveAttribute(
      'alt',
      `Foto da ${props.location}`
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
