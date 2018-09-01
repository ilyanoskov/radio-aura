import React from 'react';
import styled from 'react-emotion';
import Heading from './elements/Heading';

const Container = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Hero = () => (
  <Container>
    {' '}
    <Heading h="h1"> Radio Aura Stuff </Heading>
  </Container>
);

export default Hero;
