import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  width: 100%;
  color: yellow;
  font-family: 'Ostrich Sans';
  font-weight: 900 !important;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SectionHeading = styled.div`
  color: black;
  padding: 10px;
  font-family: 'Ostrich Sans';
  font-weight: 900 !important;
  font-size: 48px;
  background: url('/HeaderRect1.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  max-width: 300px;
  margin: auto;
`;

const SectionHeading2 = styled.div`
  color: black;
  padding: 10px;
  font-family: 'Ostrich Sans';
  font-weight: 900 !important;
  font-size: 36px;
  background: url('/HeaderRect4.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  margin: auto;
  max-width: 300px;
`;

const Heading = ({ h, style, children }) => {
  if (h === 'section') return <SectionHeading>{children}</SectionHeading>;

  if (h === 'section2') return <SectionHeading2>{children}</SectionHeading2>;
  const H = React.createElement(h, { style }, children);
  return <Container>{H}</Container>;
};

export default Heading;
