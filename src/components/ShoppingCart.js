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
  // removeFromCart(productId) {
  //   this.setState((prevState) => {
  //     const updatedCartList = prevState.cartList.filter(
  //       (product) => product.id !== productId
  //     );
  //     const updatedProductStock = { ...prevState.ProductStock };
  //     const removedProduct = prevState.cartList.find(
  //       (product) => product.id === productId
  //     );
  //     if (removedProduct) {
  //       updatedProductStock[productId] += 1;
  //     }

  //     return {
  //       cartList: updatedCartList,
  //       ProductStock: updatedProductStock,
  //     };
  //   });
  // }
  render() {
    const { cartList, removeFromCart } = this.props;
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <Button
                        color='danger'
                        size='sm'
                        onClick={() => removeFromCart(item.id)}
                        outline
                      >
                        <span className='material-icons'>cancel</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <td>
                  <b>Total</b>
                </td>
                <td></td>
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
