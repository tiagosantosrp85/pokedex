import React from 'react';
import { Btn } from './styles';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
