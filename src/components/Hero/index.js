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

const Image = styled.img`
  position: relative;
  z-index: -1;
  left: 0px;
`;

const Yellow = styled('span')`
  color: yellow;
`;

const FirstHeading = styled('h1')`
  position: absolute;
  z-index: 3;
  top: 215px;
  margin-left: 30px;
  font-size: 58px;
  font-weight: 900;

  width: 500px;
  @media only screen and (max-width: 768px) {
    top: 10px;
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
    top: 95px;
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
    top: 170px;
  }
`;

const Hero = () => (
  <Container>
    {' '}
    <div>
      <Image style={{ width: '500px' }} src="/rect1.svg" />
      <FirstHeading>
        {' '}
        This is <Yellow>Radio AURA</Yellow>{' '}
      </FirstHeading>
      <Image style={{ width: '400px' }} src="/rect2.svg" />
      <SecondHeading>
        We Know <Yellow>Good Music</Yellow>
      </SecondHeading>
      <Image style={{ width: '300px' }} src="/rect3.svg" />
      <ThirdHeading>
        Since <Yellow>1992</Yellow>
      </ThirdHeading>
    </div>
    <Radio />
  </Container>
);

export default Hero;
