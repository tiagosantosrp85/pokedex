import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

interface PokeProps {
  type: string;
}

export const BoxSearch = styled.div`
  display: flex;
  border: 1px solid lightgray;
  margin-bottom: 60px;

  input {
    flex: 1;
  }

  button {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 8px;
  }
`;

const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const BoxPokemon = styled.div<PokeProps>`
  /* height: 300px;
  border-radius: 50%;
  width: 300px; */

  ${switchProp(prop('type'), {
    normal: css`
      background-color: ${colours.normal};
    `,
    electric: css`
      background-color: ${colours.electric};
    `,
    fire: css`
      background-color: ${colours.fire};
    `,
  })}
`;
