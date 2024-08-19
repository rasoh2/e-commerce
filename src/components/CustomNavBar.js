import React from "react";
import { NavItem, Nav, NavbarBrand, Navbar } from "reactstrap";
import ShoppingCart from "./ShoppingCart";

class CustomNavBar extends React.Component {
  render() {
    return (
      <Navbar color='light' light expand='xl'>
        <NavbarBrand href='/'>Compras con React</NavbarBrand>
        <Nav className='ml-auto'>
          <NavItem>
            <ShoppingCart CartList={this.props.CartList} />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavBar;
