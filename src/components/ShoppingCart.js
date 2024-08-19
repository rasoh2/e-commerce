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

  totalAdd() {
    const total = this.props.cartList.reduce(
      (total, item) => total + parseInt(item.price, 10),
      0
    );
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(total);
  }

  render() {
    const { cartList } = this.props;
    return (
      <>
        <Button id='Popover1' color='info' onClick={this.toggle}>
          <span className='material-icons'>shopping_cart</span>
          <Badge color='secondary'>{cartList.length}</Badge>
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
                {cartList.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>{this.totalAdd()}</b>
                </td>
                <td>
                  <Button href='/'>Pagar</Button>
                </td>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </>
    );
  }
}
export default ShoppingCart;
