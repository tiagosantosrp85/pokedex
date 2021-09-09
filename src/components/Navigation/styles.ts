import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #f7786b;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 40px;
  width: 100%;

  ul {
    display: flex;
    gap: 70px;

    li {
      border: 2px solid #f7786b;
      color: #363636;
      font-size: 28px;
      font-weight: 600;
      padding: 0 5px;

      &:hover {
        border-color: #000;
      }
    }
  }
`;

export const Brand = styled.a`
  color: #000;
  font-size: 30px;
  font-weight: 700;
  margin-right: 300px;
`;
