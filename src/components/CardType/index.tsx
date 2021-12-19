import { MdArrowForwardIos as ArrowLeftIcon } from 'react-icons/md';

import Heading from 'components/Heading';

import * as S from './styles';

export type CardTypeProps = {
  id: string;
  type: 'Apartamentos' | 'Casa';
  description: string;
  amount: number;
  link: string;
  img: string;
};

const CardType = ({ type, description, amount, link, img }: CardTypeProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.InfoContainer>
          <S.InfoContent>
            <Heading size="large">{type}</Heading>

            <S.InfoDescription>{description}</S.InfoDescription>
            <S.InfoAmount>{amount} unidades</S.InfoAmount>
          </S.InfoContent>

          <S.SeeMoreLink href={link}>
            <p>Ver mais</p>
            <ArrowLeftIcon size="16" />
          </S.SeeMoreLink>
        </S.InfoContainer>
        <S.ImgContainer src={img} />
      </S.Content>
    </S.Container>
  );
};

export default CardType;
