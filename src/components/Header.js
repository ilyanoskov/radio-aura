import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled from 'react-emotion';

const StyledAnchorLink = styled(AnchorLink)`
  line-height: 50px;
  margin: 20px;
  font-size: 32px;
  color: yellow;

  :hover {
    color: yellow;
  }

  @media only screen and (max-width: 768px) {
    ${props => (props.mhidden ? 'display: none' : '')};
  }
`;

const Container = styled('div')`
  align-self: flex-end;
`;

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Navbar color="#3C1041" light expand="md">
          <Nav className="ml-auto" navbar>
            {/*
           <NavItem>
              <StyledAnchorLink href="#shows" mhidden>
                Shows & Podcasts
              </StyledAnchorLink>
            </NavItem>
            */}

            <NavItem>
              <StyledAnchorLink href="#team" mhidden>
                Team
              </StyledAnchorLink>
            </NavItem>
            <NavItem>
              <StyledAnchorLink href="#contacts">Contact</StyledAnchorLink>
            </NavItem>
            <NavItem>
              <StyledAnchorLink href="#about">About</StyledAnchorLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
