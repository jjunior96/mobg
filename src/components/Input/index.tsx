import { InputHTMLAttributes, useState, useCallback } from 'react';

import * as S from './styles';

export type LabelColorType = 'white' | 'black';

type Props = {
  label?: string;
  labelColor?: LabelColorType;
  isRequired?: boolean;
  error?: string;
  isDisabled?: boolean;
  icon?: React.ReactNode;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const Input = ({
  label,
  labelColor = 'black',
  name,
  isRequired = false,
  error,
  isDisabled = false,
  type = 'text',
  icon,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <S.Container>
      <S.Label
        htmlFor={label}
        isRequired={isRequired}
        isDisabled={isDisabled}
        labelColor={labelColor}
      >
        {label} <span>*</span>
      </S.Label>
      <S.IconContainer
        isFocused={isFocused}
        isErrored={!!error}
        isDisabled={isDisabled}
      >
        {icon}
        <input
          name={name}
          type={type}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={isDisabled}
          {...rest}
        />
      </S.IconContainer>

      {error && (
        <S.Error title={error}>
          <p>{error}</p>
        </S.Error>
      )}
    </S.Container>
  );
};

export default Input;
