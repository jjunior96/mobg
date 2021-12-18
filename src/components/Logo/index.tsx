import * as S from './styles';

export type LogoProps = {
  size?: 'medium' | 'large';
  color?: 'primary' | 'white' | 'black';
};

const Logo = ({ size = 'large', color = 'primary' }: LogoProps) => {
  return (
    <S.Container>
      <S.Logo size={size} color={color}>
        mobg
      </S.Logo>
    </S.Container>
  );
};

export default Logo;
