import styled, { keyframes } from 'styled-components';

export const Btn = styled.button`
  align-items: center;
  background-color: blue;
  color: #fff;
  border-radius: 10px;
  display: flex;
  font-size: 18px;
  height: 60px;
  justify-content: center;
  margin: 40px 0 20px 40px;
  max-width: 200px;
  text-transform: uppercase;
  width: 100%;
`;

const load = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

export const BoxSent = styled.div`
  border-radius: 8px;
  width: 500px;
  position: relative;
  overflow: hidden;

  &::before {
    background-color: green;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    animation: ${load} 5s linear;
  }

  h1 {
    position: relative;
  }
`;
