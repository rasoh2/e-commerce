import React from "react";
import { NavItem, NavLink, Nav, NavbarBrand, Navbar } from "reactstrap";
import ShoppingCart from "./ShoppingCart";

class CustomNavBar extends React.Component {
  render() {
    return (
      <Navbar color='light' light expand='xl'>
        <NavbarBrand href='/'>{this.props.title}</NavbarBrand>
        <div>Compras con React</div>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <ShoppingCart />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavBar;
