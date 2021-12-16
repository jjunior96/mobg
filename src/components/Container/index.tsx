import * as S from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <S.Container data-testid="container">
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Container;
