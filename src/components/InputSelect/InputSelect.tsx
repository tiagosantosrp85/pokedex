import React from 'react';
import { Container, Select } from './styles';

interface InputProps {
  id: number | any;
  skills: string[];
}

const InputSelect: React.FC<InputProps> = ({ id, skills }) => {
  return (
    <Container>
      <Select id={id}>
        <option value={skills}> {skills} </option>
      </Select>
    </Container>
  );
};

export default InputSelect;
