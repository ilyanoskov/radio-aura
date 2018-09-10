import React from 'react';
import styled from 'react-emotion';
import Heading from './elements/Heading';
import Section from './elements/Section';
import TeamMember from './TeamMember';
import { isEmpty } from 'lodash';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
`;

const StyledDiv = styled('div')`
  display: block;
  max-width: 1200px;

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
          {!isEmpty(djs.items) &&
            djs.items.map(dj => (
              <TeamMember
                name={dj.fields.name}
                photo={dj.fields.photo.fields.file.url}
                key={dj.sys.createdAt}
              />
            ))}
          <TeamMember />
        </Container>
        <Heading h="h2"> SALES </Heading>
        <Container>
          {!isEmpty(sales.items) &&
            sales.items.map(sale => (
              <TeamMember
                name={sale.fields.name}
                photo={sale.fields.photo.fields.file.url}
                key={sale.sys.createdAt}
              />
            ))}
        </Container>
        <Heading h="h2" style={{ margin: 0 }}>
          {' '}
          Producers{' '}
        </Heading>
        <Container>
          {!isEmpty(producers.items) &&
            producers.items.map(producer => (
              <TeamMember
                name={producer.fields.name}
                photo={producer.fields.photo.fields.file.url}
                key={producer.sys.createdAt}
              />
            ))}
        </Container>
      </Section>
    </StyledDiv>
  );
};

export default Team;
