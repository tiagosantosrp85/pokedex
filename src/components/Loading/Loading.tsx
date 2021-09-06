import React from 'react';

import pokeLoading from '../../assets/loading.gif';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={pokeLoading} alt="loading" />
    </Container>
  );
};

export default Loading;
