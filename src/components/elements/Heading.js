import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  width: 100%;
  color: yellow;
`;

const Heading = ({ h, children }) => {
  const H = React.createElement(h, {}, children);
  return (
    <Container>
      {H}
    </Container>
  );
};

export default Heading;
