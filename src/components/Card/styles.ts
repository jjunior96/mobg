import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 0.2rem solid ${theme.colors.gray_100};

    border-radius: ${theme.border.radius};

    width: 100%;
    max-width: 34rem;

    overflow: hidden;
  `}
`;

export const Content = styled.div``;

export const ImgContainer = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const InfoFooter = styled.footer`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const Type = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue_200};
    text-transform: capitalize;

    font-size: ${theme.font.sizes.xsmall};

    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue_200};

    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    margin-bottom: ${theme.spacings.xsmall};

    strong {
      color: ${theme.colors.blue_300};
    }
  `}
`;

export const Location = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue_200};

    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const ItemContainer = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemList = styled.li`
  ${({ theme }) => css`
    list-style: none;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    color: ${theme.colors.blue_200};

    div {
      display: flex;
      flex-direction: column;
    }

    svg {
      color: ${theme.colors.primary};
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
    }

    & + li {
      border-left: 1px solid ${theme.colors.gray_100};

      padding-left: ${theme.spacings.xsmall};
    }
  `}
`;
