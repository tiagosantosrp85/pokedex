import { Select } from './../InputSelect/styles';
import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    padding-bottom: 50px;
  }

  h1::after {
    content: '';
    width: 360px;
    height: 4px;
    background: #ff0000;
    display: block;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px 40px;

  img {
    width: 200px;
    height: 200px;
  }
`;

export const Pokemon = styled.img`
  position: absolute;
  z-index: 1;
`;

export const Background = styled.img`
  position: relative;
  left: 0;
  border-radius: 20px;
`;
