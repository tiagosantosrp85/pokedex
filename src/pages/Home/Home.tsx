import React from 'react';
import { Navigation } from '../../components';
import { Cards } from '../../components';

import { Container } from './styles';
import { Search } from '../../components';
import Types from '../../components/Types';
import Walking from '../../components/walking';

const Home: React.FC = () => {
  return (
    <Container>
      <Navigation />

      <h1>What Pokemon are you looking for?</h1>

      <Cards />
      <Search />
      <Types />
      <Walking />
    </Container>
  );
};

export default Home;
