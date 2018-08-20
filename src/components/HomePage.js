import React from 'react';
import styled from 'react-emotion';

import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Home;
