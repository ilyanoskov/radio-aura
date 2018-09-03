import React from 'react';
import styled from 'react-emotion';
import Heading from './elements/Heading';
import Section from './elements/Section';
import TeamMember from './TeamMember';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
`;

const StyledDiv = styled('div')`
  display: block;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Team = ({ djs, sales, producers }) => {
  return (
    <StyledDiv>
      <Section id="team">
        <Heading h="h1" style={{ padding: '0' }}>
          {' '}
          Team{' '}
        </Heading>
        <Heading h="h2"> DJs </Heading>
        <Container>
          <TeamMember />
        </Container>
        <Heading h="h2"> SALES </Heading>
        <Container>
          <TeamMember />
        </Container>
        <Heading h="h2" style={{ margin: 0 }}>
          {' '}
          Producers{' '}
        </Heading>
        <Container>
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </Container>
      </Section>
    </StyledDiv>
  );
};

export default Team;
