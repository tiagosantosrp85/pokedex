import React from 'react';
import { Container, Content, Pokemon } from './styles';
import Collapse from '../../components/Collapse';
import Pokemons from '../../mocks';

const Types: React.FC = () => {
  return (
    <Container>
      <h1>Escolha seu Pokemon</h1>

      <Content>
        {Pokemons.map(item => (
          <div key={item.id}>
            <Pokemon type={item.type}>
              <img src={item.image} alt="Nome do pokemon aqui" />
            </Pokemon>
            <Collapse skills={item.skills} />
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default Types;
