import React from 'react';

import { Container, Brand } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <Brand href="/">Pokedéx</Brand>

      <ul>
        <li>
          <a href="/forms">Forms</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
        <li>
          <a href="">Portfólio</a>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
