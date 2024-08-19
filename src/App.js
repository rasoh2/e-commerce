import React from "react";
import "./App.css";
import Product from "./components/Product";
import { Container, Row, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./dataBase/ProductList";
import CustomNavBar from "./components/CustomNavBar";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";

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
      stockAlert: "",
    };
    this.addCart = this.addCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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
        stockAlert: "",
      }));
    } else {
      this.setState(
        {
          stockAlert: `No hay stock disponible para ${product.title}`,
        },
        () => {
          console.log(this.state.stockAlert);
        }
      );
    }
  }
  removeFromCart(productId) {
    this.setState((prevState) => {
      const updatedCartList = prevState.cartList.filter(
        (product) => product.id !== productId
      );
      const updatedProductStock = { ...prevState.ProductStock };

      const removedProduct = prevState.cartList.find(
        (product) => product.id === productId
      );
      if (removedProduct) {
        updatedProductStock[productId] += 1;
      }

      return {
        cartList: updatedCartList,
        ProductStock: updatedProductStock,
      };
    });
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
      <Container className='d-flex flex-column justify-content-between h-100'>
        <CustomNavBar
          cartList={this.state.cartList}
          removeFromCart={this.removeFromCart}
        />
        {this.state.stockAlert && (
          <Alert color='danger' className='mt-3'>
            {this.state.stockAlert}
          </Alert>
        )}
        <Row>{arrayComponents}</Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
