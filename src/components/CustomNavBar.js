import React from "react";
import { NavItem, Nav, NavbarBrand, Navbar } from "reactstrap";
import ShoppingCart from "./ShoppingCart";

class CustomNavBar extends React.Component {
  render() {
    const { cartList, removeFromCart } = this.props;
    return (
      <Navbar color='light' light expand='xl'>
        <NavbarBrand href='/'>Compras con React</NavbarBrand>
        <Nav className='ml-auto'>
          <NavItem>
            <ShoppingCart cartList={cartList} removeFromCart={removeFromCart} />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavBar;
