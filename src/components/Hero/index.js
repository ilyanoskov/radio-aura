import React from 'react';
import styled from 'react-emotion';
import Heading from '../elements/Heading';

import Radio from './radio';

const Container = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hero = () => (
  <Container>
    {' '}
    <div>
      <Heading h="h1"> This is Radio AURA </Heading>
      <Heading h="h1"> We know good music </Heading>
      <Heading h="h1"> Since 1992 </Heading>
    </div>
    <Radio />
  </Container>
);

export default Hero;
