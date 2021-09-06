import styled from 'styled-components';
import pokeball from '../../assets/pokeball.png';
import theme from '../../styles/theme';

export const Container = styled.div`
  background-size: cover;

  &:hover {
    opacity: 0.9;
    transition: ease-in-out 0.2s;
  }

  button {
    align-items: center;
    background-color: ${theme.colors.secondary};
    border-radius: 12px;
    display: flex;
    height: 60px;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    width: 100%;

    &::before {
      background-image: url(${pokeball});
      background-size: contain;
      bottom: 36px;
      content: '';
      height: 90px;
      left: -50px;
      opacity: 0.3;
      position: absolute;
      width: 90px;
    }

    &::after {
      background-image: url(${pokeball});
      background-size: contain;
      bottom: 0;
      content: '';
      height: 90px;
      opacity: 0.3;
      position: absolute;
      right: -12px;
      top: -16px;
      width: 90px;
    }

    p {
      color: ${theme.colors.white};
      font-size: 16px;
      padding-left: 16px;
    }
  }
`;
