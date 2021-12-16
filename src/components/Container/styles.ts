import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;

    width: 100%;
    max-width: ${theme.grid.container};
  `}
`;
