import React, { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { apiPoke } from '../../services/api';
import Loading from '../Loading';
import PokeShadow from '../../assets/shadow-pokemon.svg';
import { BoxPokemon, BoxSearch } from './styles';

interface PokeProps {
  name: string;
  photo: string;
  type: string;
}

const Search: React.FC = () => {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState<PokeProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);

  const getPokemon = useCallback(async name => {
    console.log(name);
    try {
      setIsLoading(true);

      const { data } = await apiPoke.get(`pokemon/${name}`);

      const thePokemon = {
        name: data.name,
        photo: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name,
      };

      setPokemon(thePokemon);
      setPokemonNotFound(false);
    } catch (e) {
      setPokemonNotFound(true);
    } finally {
      setName('');
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <BoxSearch>
        <input
          type="text"
          placeholder="Who is this Pokemon?"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button
          disabled={name.length < 3}
          onClick={() => getPokemon(name)}
        >
          <FiSearch />
        </button>
      </BoxSearch>

      {isLoading ? (
        <Loading />
      ) : pokemonNotFound ? (
        <>
          <h1>Não encontrado</h1>
          <img src={PokeShadow} alt="PokeShadow" width={100} />
        </>
      ) : (
        <BoxPokemon type={pokemon ? pokemon.type : ''}>
          <img src={pokemon?.photo} alt={pokemon?.name} />
        </BoxPokemon>
      )}
    </>
  );
};

export default Search;
