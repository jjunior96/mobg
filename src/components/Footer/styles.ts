import { darken } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;

    border-top: 1px solid ${theme.colors.gray_200};

    padding: ${theme.spacings.small} 0;

    ${HeadingStyles.Container} {
      text-transform: uppercase;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};

    width: 100%;
    max-width: ${theme.grid.container};

    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;

      color: ${darken(0.2, theme.colors.gray_200)};

      text-decoration: none;

      margin-bottom: ${theme.spacings.xxsmall};

      font-size: ${theme.font.sizes.small};
    }

    li {
      list-style: none;

      color: ${theme.colors.primary};
    }

    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const CopyrightContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    border-top: 1px solid ${theme.colors.gray_200};
  `}
`;
