import styled from 'styled-components';
import Fundo from '../../assets/fundo.jpg';

export const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  background-image: url(${Fundo});

  img {
    padding-top: 40px;
    transition-timing-function: ease-in-out;
    transition-duration: 2s;
    transition-delay: 1s;
  }

  img:hover {
    transform: translateX(1100px);
  }
`;
