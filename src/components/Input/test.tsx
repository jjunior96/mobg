import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Input from '.';

describe('<Input />', () => {
  it('should render the Input component', () => {
    const { container } = renderWithTheme(
      <Input name="Name" aria-label="name-input" />
    );

    expect(
      screen.getByRole('textbox', { name: /name-input/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Input component with label', () => {
    renderWithTheme(<Input label="Name" />);

    expect(screen.getByText(/name/i)).toHaveStyle({
      'font-size': '1.4rem',
      color: `${theme.colors.blue_300}`
    });
  });

  it('should render the Input component with labelColor', () => {
    renderWithTheme(<Input label="Name" labelColor="white" />);

    expect(screen.getByText(/name/i)).toHaveStyle({
      color: `${theme.colors.white}`
    });
  });

  it('should render the Input component when is required', () => {
    renderWithTheme(<Input label="Name" isRequired />);

    // Quando `isRequired` é passado, é exibido um span com "*" para
    // simbolizar que o campo é obrigatório
    expect(screen.getByText(/\*/)).toHaveStyle({
      display: 'inline',
      color: theme.colors.red
    });
  });

  it('should render the Input component when error is passed', () => {
    renderWithTheme(<Input label="Name" error="Insert a name valid" />);

    expect(screen.getByText(/Insert a name valid/i)).toBeInTheDocument();
  });

  it('should is not accessible by tab when disabled', () => {
    renderWithTheme(<Input label="Name" isDisabled />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).not.toHaveFocus();
  });
});
