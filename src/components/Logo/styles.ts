import styled, { css, DefaultTheme } from 'styled-components';

import { LogoProps } from '.';

type Props = Pick<LogoProps, 'size' | 'color'>;

export const Container = styled.div``;

const logoModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
};

export const Logo = styled.h2<Props>`
  ${({ theme, size, color }) => css`
    font-family: ${theme.font.family.secundary};
    font-weight: ${theme.font.bold};

    ${!!size && logoModifiers[size](theme)};
    color: ${theme.colors[color!]};
  `}
`;
