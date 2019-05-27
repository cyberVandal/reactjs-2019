import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  } from 'reactstrap';
import {NavLink} from 'react-router-dom';

import style from './Navigation.module.css';



 class Navigation extends React.Component {
  constructor(props) {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Online-Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to='/' className={style.myButton}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/store' className={style.myButton}>Store</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;