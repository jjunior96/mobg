import { MdArrowForwardIos as ArrowLeftIcon } from 'react-icons/md';

import Heading from 'components/Heading';

import * as S from './styles';

const CardType = () => {
  return (
    <S.Container>
      <S.Content>
        <S.InfoContainer>
          <S.InfoContent>
            <Heading size="large">Apartamentos</Heading>

            <S.InfoDescription>Lofts, studios, kitnets...</S.InfoDescription>
            <S.InfoAmount>126 unidades</S.InfoAmount>
          </S.InfoContent>

          <S.SeeMoreLink href="#">
            <p>Ver mais</p>
            <ArrowLeftIcon size="16" />
          </S.SeeMoreLink>
        </S.InfoContainer>
        <S.ImgContainer src="/img/house-1.jpeg" />
      </S.Content>
    </S.Container>
  );
};

export default CardType;
