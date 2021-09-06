import React from 'react';
import {
  Background,
  Container,
  Content,
  Pokemon,
} from './styles';
import InputSelect from '../../components/InputSelect';
import Pokemons from '../../mocks';

const Types: React.FC = () => {
  return (
    <Container>
      <h1>Escolha seu Pokemon</h1>
      <Content>
        {Pokemons.map(item => (
          <div key={item.id}>
            <Pokemon src={item.image} />
            <Background src={item.background} />
            <InputSelect id={item.id} skills={item.skills} />
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default Types;
