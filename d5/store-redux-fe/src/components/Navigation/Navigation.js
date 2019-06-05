import React from 'react';
import { connect } from 'react-redux';
import img from '../images/shopping_cart.png';
import imgN from '../images/shopping_cart_n.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

import {
    NavLink
} from 'react-router-dom';

import classes from './Navigation.module.css';

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
                    <NavbarBrand>E-Stores</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className={classes.link} exact activeClassName={classes.activePage} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classes.link} activeClassName={classes.activePage} to="/store">Store</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classes.link} activeClassName={classes.activePage} to="/cart"><img src={this.props.isEmpty ? img : imgN} style={{width:'20px', height:'20px' }} /></NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
    isEmpty: state.isEmpty
	};
};

export default connect(mapStateToProps)(Navigation);

