import {
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Input from 'components/Input';
import Logo from 'components/Logo';

import * as S from './styles';

const Footer = () => (
  <S.Container>
    <Container>
      <S.Content>
        <S.Column>
          <Logo />

          <p>Encontre o lugar perfeito para morar</p>

          <ul>
            <li>
              <FaWhatsapp />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>
        </S.Column>

        <S.Column>
          <h3>Navegação</h3>

          <ul>
            <li>Home</li>
            <li>Quero alugar</li>
            <li>Falar com um agente</li>
            <li>Termos de uso</li>
            <li>Política de privacidade</li>
          </ul>
        </S.Column>

        <S.Column>
          <button>Newletter</button>

          <Heading>Receba novidades no seu e-mail</Heading>

          <Input placeholder="Digite seu e-mail" />
        </S.Column>
      </S.Content>
    </Container>

    <Container>
      <S.CopyrightContainer>
        <p>mobg © Todos os direitos reservados</p>

        <div>
          <a href="#">Anunciar imóvel</a>
          <a href="#">Queremos o seu feedback</a>
        </div>
      </S.CopyrightContainer>
    </Container>
  </S.Container>
);

export default Footer;
