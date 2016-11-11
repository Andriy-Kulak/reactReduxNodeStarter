import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

import {
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';

export default class NavBar extends Component {

  render() {

    return (
      <Navbar className="react-navbar" inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Timesheet App</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem className="nav-link" eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/timesheet/">
              <NavItem className="nav-link" eventKey={2}>My Timesheet</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
