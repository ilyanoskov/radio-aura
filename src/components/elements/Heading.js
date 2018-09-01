import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  width: 100%;
  color: yellow;
  font-family: 'Ostrich Sans';
  font-weight: 900 !important;
`;

const Heading = ({ h, style, children }) => {
  const H = React.createElement(h, { style }, children);
  return <Container>{H}</Container>;
};

export default Heading;
