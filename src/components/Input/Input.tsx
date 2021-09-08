import React from 'react';
import { Container } from './styles';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  );
};

export default Input;
