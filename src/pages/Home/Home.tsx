import React from 'react';
import { Cards } from '../../components';

import { Container } from './styles';
import { Search } from '../../components';
import Types from '../../components/Types';
import Collapse from '../../components/Collapse';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>What Pokemon are you looking for?</h1>

      <Cards />
      <Search />
      <Types />
      <Collapse />
    </Container>
  );
};

export default Home;
