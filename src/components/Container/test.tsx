import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Container from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <p>Test container</p>
      </Container>
    );

    expect(screen.getByText(/test container/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
      }

      .c1 {
        margin: 0 auto;
        width: 100%;
        max-width: 130rem;
      }

      <div
        class="c0"
        data-testid="container"
      >
        <div
          class="c1"
        >
          <p>
            Test container
          </p>
        </div>
      </div>
    `);
  });
});
