import * as S from './styles';

export type LineColorProps = 'primary' | 'secundary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
};

const Heading = ({ children, color, size = 'large' }: HeadingProps) => {
  return (
    <S.Container color={color} size={size}>
      {children}
    </S.Container>
  );
};

export default Heading;
