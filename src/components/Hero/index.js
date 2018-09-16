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
  position: relative;
  top: 0;
  left: 0;
  width: 400px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Yellow = styled('span')`
  color: yellow;
`;

const FirstHeading = styled('h1')`
  position: absolute;
  z-index: 3;
  top: 215px;
  margin-left: 20px;
  font-size: 58px;
  font-weight: 900;

  width: 500px;
  @media only screen and (max-width: 768px) {
    top: 40px;
    margin-left: -50px;
    font-size: 42px;
  }
`;

const SecondHeading = styled('h1')`
  position: absolute;
  z-index: 3;
  top: 300px;
  font-size: 48px;
  font-weight: 900;
  width: 500px;
  @media only screen and (max-width: 768px) {
    top: 105px;
    font-size: 32px;
    margin-left: -40px;
  }
`;

const ThirdHeading = styled('h1')`
  position: absolute;
  z-index: 3;
  top: 375px;
  margin-left: 110px;
  font-size: 48px;
  font-weight: 900;
  width: 290px;
  @media only screen and (max-width: 768px) {
    top: 150px;
    margin-left: 60px;
    font-size: 32px;
  }
`;

const FirstImage = styled('img')`
  position: relative;
  z-index: -1;
  left: 0px;
  width: 500px;
  @media only screen and (max-width: 768px) {
    width: 350px;
  }
`;

const SecondImage = styled('img')`
  position: relative;
  z-index: -1;
  left: 0px;
  width: 400px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const ThirdImage = styled('img')`
  position: relative;
  z-index: -1;
  left: 0px;
  width: 300px;

  @media only screen and (max-width: 768px) {
    width: 200px;
  }
`;

const Hero = () => (
  <Container>
    {' '}
    <div>
      <FirstImage src="/rect1.svg" />
      <FirstHeading>
        {' '}
        This is <Yellow>Radio AURA</Yellow>{' '}
      </FirstHeading>
      <SecondImage src="/rect2.svg" />
      <SecondHeading>
        We Know <Yellow>Good Music</Yellow>
      </SecondHeading>
      <ThirdImage src="/rect3.svg" />
      <ThirdHeading>
        Since <Yellow>1992</Yellow>
      </ThirdHeading>
    </div>
    <Radio />
  </Container>
);

export default Hero;
