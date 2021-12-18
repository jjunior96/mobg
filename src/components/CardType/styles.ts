import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 80rem;

    border-radius: ${theme.border.radius};

    overflow: hidden;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 28rem;
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    width: 50%;

    height: 100%;

    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 0.2rem solid ${theme.colors.gray_100};
    border-right: none;
  `}
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDescription = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.blue_200};
  `}
`;

export const InfoAmount = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.blue_200};
  `}
`;

export const ImgContainer = styled.img`
  width: 50%;

  height: 100%;

  object-fit: cover;
`;

export const SeeMoreLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;

    line-height: 1;

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.blue_200};

    width: fit-content;

    display: flex;
    align-items: center;

    width: fit-content;

    svg {
      margin-left: ${theme.spacings.xxsmall};

      color: ${theme.colors.blue_200};

      &:hover {
        color: ${theme.colors.primary};
      }
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
