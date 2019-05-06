import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Link from 'next/link';

class NavbarUst extends React.Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-custom fixed-top" dark expand="md">
          <Link href="/"><NavbarBrand className="navbar-brand">Berk Elmas</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/about" as="/hakkimda"><NavLink>Hakkımda</NavLink></Link>
              </NavItem>
              <NavItem>
                <NavLink href="/tech-stack">Teknolojiler</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/articles">Yazılar</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarUst;
