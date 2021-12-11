import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secundary';
  children: React.ReactNode;
  minimal?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
};

export type ButtonProps = ButtonTypes & Props;

const Button = ({
  children,
  size = 'large',
  color = 'primary',
  minimal = false,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container size={size} color={color} minimal={minimal} {...rest}>
      {!!icon && icon}
      {children}
    </S.Container>
  );
};

export default Button;
