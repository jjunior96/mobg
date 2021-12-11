import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 2.4rem;

    font-size: ${theme.font.sizes.xxsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 3.2rem;

    font-size: ${theme.font.sizes.xsmall};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5.6rem;

    font-size: ${theme.font.sizes.xsmall};
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;

    color: ${theme.colors.blue_200};

    font-weight: ${theme.font.normal};

    border: 2px solid ${theme.colors.secundary};

    transition: color ${theme.transition.default},
      border ${theme.transition.default};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};

      border-color: ${theme.colors.primary};
    }
  `
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, color, size, minimal }) => css`
    width: 100%;

    color: ${theme.colors.white};
    background-color: ${theme.colors[color!]};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${theme.border.radius};
    border: 0;

    padding: 0 ${theme.spacings.xsmall};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};

    transition: background-color 0.3s, box-shadow 0.2s;

    outline: none;

    &:focus {
      outline: 3px solid ${lighten(0.2, theme.colors[color!])};
    }

    &:hover {
      background-color: ${darken(0.05, theme.colors[color!])};

      box-shadow: ${theme.box.shadow};
    }

    > svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    ${!!size && containerModifiers[size](theme)};

    ${!!minimal && containerModifiers.minimal(theme)};
  `}
`;
