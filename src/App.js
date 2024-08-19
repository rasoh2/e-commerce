import React from "react";
import "./App.css";
import Product from "./components/Product";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./dataBase/ProductList";
import CustomNavBar from "./components/CustomNavBar";
import Footer from "./components/Footer"; //

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: ProductList,
      cartList: [],
      ProductStock: ProductList.reduce((acc, product) => {
        acc[product.id] = product.stock;
        return acc;
      }, {}),
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(product) {
    const { ProductStock } = this.state;

    if (ProductStock[product.id] > 0) {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
        ProductStock: {
          ...prevState.ProductStock,
          [product.id]: prevState.ProductStock[product.id] - 1,
        },
      }));
    } else {
      // Aquí podrías agregar una notificación o mensaje si el stock es cero
      console.log("No hay stock disponible");
    }
  }

  render() {
    const arrayComponents = this.state.ProductList.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          stock={this.state.ProductStock[product.id]}
          addCart={this.addCart}
        />
      );
    });

    return (
      <Container className='d-flex flex-column justify-content-between h-100 '>
        <CustomNavBar cartList={this.state.cartList} />
        <Row>{arrayComponents}</Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
