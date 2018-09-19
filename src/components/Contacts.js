import React from 'react';
import Heading from './elements/Heading';
import Section from './elements/Section';

import styled from 'react-emotion';

const StyledDiv = styled('div')`
  display: block;
  max-width: 1200px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contacts = () => (
  <StyledDiv>
    <Section id="contacts">
      <Heading h="h1" style={{ padding: 0, textAlign: 'left', margin: '0' }}>
        {' '}
        Contacts{' '}
      </Heading>
    </Section>
  </StyledDiv>
);

export default Contacts;
