import styled from 'styled-components';
import pokeball from '../../assets/pokeball.png';

export const Container = styled.div`
  background-image: url(${pokeball});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 154px;
  background-position-y: -208px;
  max-width: 768px;
  margin: 0 auto;
  padding: 12px;

  h1 {
    font-weight: 600;
    text-align: center;
  }
`;
