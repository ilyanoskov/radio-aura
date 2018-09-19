import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled from 'react-emotion';

const StyledAnchorLink = styled(AnchorLink)`
  transition: 0.2s ease;
  line-height: 50px;
  margin: 20px;
  font-size: 32px;
  color: black;
  font-weight: 900;
  z-index: 2;

  padding: 10px;
  margin: 10px;

  :hover {
    transition: 0.2s ease;
    color: black;
    padding: 20px;
  }

  ${props => ('background: url(' + props.backgroundUrl + ')': '')};
  background-repeat: no-repeat;
  background-size: auto 100%;

  @media only screen and (max-width: 768px) {
    ${props => (props.mhidden ? 'display: none' : '')};
  }
`;

const Container = styled('div')`
  @media only screen and (min-width: 769px) {
    align-self: flex-end;
  }

  margin-top: 20px;
  margin-right: 30px;
`;

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <div>
          {/* 
        
          <StyledAnchorLink href="#shows" mhidden>
          Shows & Podcasts
        </StyledAnchorLink>
        */}

          <StyledAnchorLink
            backgroundUrl="/HeaderRect1.svg"
            href="#team"
            mhidden
          >
            Team
          </StyledAnchorLink>
          <StyledAnchorLink backgroundUrl="/HeaderRect2.svg" href="#contacts">
            Contact
          </StyledAnchorLink>
          <StyledAnchorLink backgroundUrl="/HeaderRect3.svg" href="#about">
            About
          </StyledAnchorLink>
        </div>
      </Container>
    );
  }
}
