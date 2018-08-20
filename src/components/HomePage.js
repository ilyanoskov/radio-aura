import React from 'react';
import styled from 'react-emotion';

import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Shows from './Shows';
import Team from './Team';
import Contacts from './Contacts';


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
      <Shows />
      <Team />
      <AboutUs />
      <Contacts />
    </div>
  );
};

export default Home;
