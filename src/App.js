import React from "react";
import "./App.css";
import Product from "./components/Product";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./dataBase/ProductList";
import CustomNavBar from "./components/CustomNavBar";
// import CartList from "./CartList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: ProductList,
      CartList: [],
    };
    this.addCart = this.addCart.bind(this);
  }
  addCart(product) {
    this.setState((prevState) => ({
      CartList: [...prevState.CartList, product],
    }));
  }
  render() {
    const arrayComponents = this.state.ProductList.map((product) => {
      return (
        <Product
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          stock={product.stock}
          addCart={this.addCart}
        />
      );
    });

    return (
      <Container>
        <CustomNavBar CartList={this.state.CartList} />

        <Row>{arrayComponents}</Row>
      </Container>
    );
  }
}

export default App;
