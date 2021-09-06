import React from 'react';
import { Cards } from '../../components';

import { Container } from './styles';
import { Search } from '../../components';
import Types from '../../components/Types';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>What Pokemon are you looking for?</h1>

      <Cards />
      <Search />
      <Types />
    </Container>
  );
};

export default Home;
