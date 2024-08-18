import React from "react";
import { NavItem, NavLink, Nav, NavbarBrand, Navbar } from "reactstrap";
import ShoppingCart from "../ShoppingCart";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <Navbar color='light' light expand='xl'>
          <NavbarBrand href='/'>{this.props.titulo} </NavbarBrand>
          <Nav className='ml-auto'></Nav>
          <NavItem>
            <ShoppingCart />
          </NavItem>
        </Navbar>
      </>
    );
  }
}
export default Navigation;
