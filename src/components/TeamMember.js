import React from 'react';
import styled from 'react-emotion';
import Heading from './elements/Heading';
import Team from './Team';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Image = styled('img')`
  height: 150px;
  width: 150px;

  margin: 10px;
  transition: 0.2s ease;

  :hover {
    height: 170px;
    width: 170px;
    transition: 0.2s ease;
  }
`;

const TeamMember = ({ name, imageUrl }) => (
  <Container>
    <Image src={imageUrl || 'https://picsum.photos/150/150'} />
    <Heading style={{ textAlign: 'center' }} h="h3">
      {name || 'Team Member'}
    </Heading>
  </Container>
);

export default TeamMember;
