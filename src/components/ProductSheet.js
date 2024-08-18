import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
  Container,
} from "reactstrap";
import "./ProductSheet.css";
import CartList from "../CartList";

class ProductSheet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      CartList,
    };
    this.toggle = this.toggle.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  addCart() {
    CartList.push({
      titulo: this.props.props.title,
      precio: this.props.props.price,
    });
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { id, title, image, description, price, stock } = this.props;
    return (
      <Container>
        <Button onClick={this.toggle}>Ver ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <CardImg src={image} />
            <p>El detalle del producto seleccionado es el siguiente:</p>
            {description}
            <p>
              Este producto tiene el valor de <b>{price}</b> pesos.
            </p>
            <p>
              Hay <b>{stock}</b> unidades de este producto
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              className='modalFooter'
              color='primary'
              onClick={this.addCart}
            >
              Agregar al Carrito
            </Button>
            <Button
              className='modalFooter'
              color='secondary'
              onClick={this.toggle}
            >
              Volver atrás
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ProductSheet;
