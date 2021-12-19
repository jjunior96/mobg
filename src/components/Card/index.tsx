import {
  BiRuler as MetersIcon,
  BiBed as RoomsIcon,
  BiCar as GarageIcon
} from 'react-icons/bi';

import * as S from './styles';

export type CardProps = {
  id: string;
  type: 'house' | 'apartment';
  img: string;
  price: string;
  location: string;
  meters: number;
  rooms: number;
  garage: number;
};

const Card = ({
  type,
  img,
  price,
  location,
  meters,
  rooms,
  garage
}: CardProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.ImgContainer src={img} alt={`Foto da ${location}`} />

        <S.InfoContainer>
          <S.Type>{type}</S.Type>

          <S.Price>
            R$ <strong>{price}</strong>,00
          </S.Price>

          <S.Location>{location}</S.Location>

          <S.InfoFooter>
            <S.ItemContainer>
              <S.ItemList>
                <div>
                  <MetersIcon />
                  <p>{meters}m2</p>
                </div>
              </S.ItemList>
              <S.ItemList>
                <div>
                  <RoomsIcon />
                  <p>{rooms} Quartos</p>
                </div>
              </S.ItemList>
              <S.ItemList>
                <div>
                  <GarageIcon />
                  <p>{garage} Vaga</p>
                </div>
              </S.ItemList>
            </S.ItemContainer>
          </S.InfoFooter>
        </S.InfoContainer>
      </S.Content>
    </S.Container>
  );
};

export default Card;
