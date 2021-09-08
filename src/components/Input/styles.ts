import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 0 40px;

  label {
    font-size: 18px;
  }

  input {
    border: 1px solid;
    border-radius: 4px;
    font-size: 16px;
    height: 35px;
    max-width: 200px;
    padding: 0 10px;
    width: 100%;
  }
`;
