import React from "react";
import {
  Popover,
  PopoverHeader,
  PopoverBody,
  Table,
  Badge,
  Button,
} from "reactstrap";
import CarList from "../CartList";

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      PopoverOpen: false,
      CarList,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      PopoverOpen: !prevState.PopoverOpen,
    }));
  }
  render() {
    return (
      <>
        <Button id='Popover1' color='info'>
          <span className='material-icons'>shopping_cart</span>
          <Badge color='secondary'>0</Badge>
        </Button>
        <Popover
          placement='bottom'
          isOpen={this.state.PopoverOpen}
          target='Popover1'
          toggle={this.toggle}
        >
          <PopoverHeader></PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>{CarList}</tbody>
            </Table>
          </PopoverBody>
        </Popover>
      </>
    );
  }
}
export default ShoppingCart;
