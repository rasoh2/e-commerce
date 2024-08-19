import React from "react";
import {
  Popover,
  PopoverHeader,
  PopoverBody,
  Table,
  Badge,
  Button,
} from "reactstrap";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PopoverOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      PopoverOpen: !prevState.PopoverOpen,
    }));
  }
  render() {
    const { CartList } = this.props;
    return (
      <>
        <Button id='Popover1' color='info' onClick={this.toggle}>
          <span className='material-icons'>shopping_cart</span>
          <Badge color='secondary'>{CartList.length}</Badge>
        </Button>
        <Popover
          placement='bottom'
          isOpen={this.state.PopoverOpen}
          target='Popover1'
          toggle={this.toggle}
        >
          <PopoverHeader>Carrito de Compras</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {CartList.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.titulo}</td>
                    <td>{item.precio}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </PopoverBody>
        </Popover>
      </>
    );
  }
}
export default ShoppingCart;
