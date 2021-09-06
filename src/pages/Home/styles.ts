import styled from 'styled-components';
import pokeball from '../../assets/pokeball.png';

export const Container = styled.div`
  background-image: url(${pokeball});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 154px;
  background-position-y: -208px;

  h1 {
    font-weight: 600;
    text-align: center;
  }
`;
