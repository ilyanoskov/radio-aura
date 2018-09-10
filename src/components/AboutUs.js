import React from 'react';
import Heading from './elements/Heading';
import Section from './elements/Section';

import styled from 'react-emotion';

const StyledText = styled('p')`
  color: yellow;
  margin: 30px;
  text-align: left;
  font-size: 18pt;
  max-width: 500px;
`;

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutUs = () => (
  <Section id="about">
    <Heading h="h1" style={{ padding: 0 }}>
      {' '}
      About Us{' '}
    </Heading>

    <Container>
      <StyledText>
        For 25 years now, Radio AURA is our way to rejoice your day with diverse
        music, fresh shows and good mood. We are the first private radio station
        in Bulgaria. Broadcast in 1992, we had our own program in 1993. On Radio
        AURA you can always hear an enthralling mixture of current hits and
        alternative new flow of various genres. In attempt to represent the
        diversity of AUBG we present shows in 4 languages - Bulgarian, English,
        Russian and Albanian. Each week we host 10 regular shows and more than 3
        individual shows.
      </StyledText>

      <StyledText>
        Imagine the pulse of the city, beating more than 20 years. Imagine more
        than 40 enthusiastic young people, sometimes working more than 12 hours
        a day, turning their voices into something emblematic of students and
        young people in Blagoevgrad. This is radio AURA – the pulse of
        Blagoevgrad.
      </StyledText>
    </Container>
  </Section>
);

export default AboutUs;
