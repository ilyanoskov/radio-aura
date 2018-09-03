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
`;

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="#3C1041" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <StyledAnchorLink href="#team">Team</StyledAnchorLink>

              <StyledAnchorLink href="#contacts">Contact</StyledAnchorLink>
              <StyledAnchorLink href="#about">About</StyledAnchorLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
