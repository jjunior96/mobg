import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { InputProps, LabelColorType } from '.';

type DisableProps = Pick<InputProps, 'isDisabled'>;

type IconContainerProps = {
  isFocused: boolean;
  isErrored?: boolean;
} & DisableProps;

type LabelProps = {
  isRequired?: boolean;
  labelColor?: LabelColorType;
} & DisableProps;

export const Container = styled.div``;

export const Label = styled.label<LabelProps>`
  ${({ theme, isRequired, isDisabled, labelColor }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin: 0;
    padding: 0;
    line-height: 1;

    span {
      display: none;
    }

    color: ${labelColor === 'white'
      ? theme.colors.white
      : theme.colors.blue_300};

    ${isRequired &&
    css`
      span {
        display: inline;
        color: ${theme.colors.red};
      }
    `}

    ${isDisabled &&
    css`
      cursor: not-allowed;

      color: ${theme.colors.gray_200};
    `}
  `}
`;

export const IconContainer = styled.div<IconContainerProps>`
  ${({ theme, isErrored, isFocused, isDisabled }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray_200};

    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall} 2rem;

    width: 100%;
    height: 56px;

    font-size: ${theme.font.sizes.medium};

    display: flex;
    align-items: center;

    border: 2px solid ${theme.colors.gray_200};

    cursor: default;

    &:focus-within {
      /* box-shadow: 0 0 0.5rem ${theme.colors.primary}; */
      outline: 3px solid ${lighten(0.4, theme.colors.primary)};
    }

    input {
      color: ${theme.colors.blue_300};
      background: transparent;
      outline: none;

      border: 0;

      flex: 1;

      // Remove as setas up e down nos inputs do tipo number
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type='number'] {
        -moz-appearance: textfield;
      }

      /* Remove os estilos nas sugestões do Chrome */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.colors.gray_200};
        -webkit-box-shadow: #282f3a26 inset;
        box-shadow: #282f3a26;
        transition: background-color 5000s ease-in-out 0s;
      }

      &::placeholder {
        color: ${theme.colors.gray_200};
      }

      ${isDisabled &&
      css`
        cursor: not-allowed;

        color: ${theme.colors.gray_200};
      `}
    }

    svg {
      margin-right: ${theme.spacings.xsmall};
      color: ${theme.colors.gray_200};
    }

    ${isErrored &&
    css`
      border-color: ${theme.colors.red};

      > svg {
        color: ${theme.colors.red};
      }
    `}

    ${isFocused &&
    css`
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};

      > svg {
        color: ${theme.colors.primary};
      }
    `}


    ${isDisabled &&
    css`
      cursor: not-allowed;

      border-color: ${lighten(0.3, theme.colors.gray_200)};

      color: ${lighten(0.3, theme.colors.gray_200)};

      > svg {
        color: ${lighten(0.3, theme.colors.gray_200)};
      }
    `}
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    margin: 0;
    padding: 0;
    margin-bottom: ${theme.spacings.xxsmall};

    svg {
      margin: 0;
      padding: 0;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.red};
    }
  `}
`;
