import styled from 'styled-components';

interface BtnProps {
  isOpen: boolean;
}

export const Btn = styled.button<BtnProps>`
  background-color: #000;
  border-radius: ${({ isOpen }) =>
    isOpen ? '8px 8px 0 0' : '8px'};
  color: #fff;
  display: flex;
  height: 25px;
  justify-content: space-between;
  margin-top: 15px;
  padding: 3px 15px;
  width: 300px;
`;

export const Content = styled.div<BtnProps>`
  width: 300px;
  background-color: #d3d3d3;
  border-radius: ${({ isOpen }) =>
    isOpen ? '0 0 8px 8px' : '0'};
  padding-left: 15px;
`;
