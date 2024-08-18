import React from "react";
import "./App.css";
import Product from "./components/Product";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./dataBase/ProductList";
import CustomNavBar from "./components/CustomNavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: ProductList,
    };
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
        />
      );
    });

    return (
      <Container>
        <CustomNavBar />

        <Row>{arrayComponents}</Row>
      </Container>
    );
  }
}

export default App;
