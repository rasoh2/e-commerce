import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import ProductSheet from "./ProductSheet.js";

class Product extends React.Component {
  render() {
    const { image, title, price, description, stock, addCart } = this.props;
    return (
      <Col xs='12' sm='6' md='4' lg='3' className='mb-4 '>
        <Card
          className='Card d-flex space-between'
          body
          outline
          color='primary'
        >
          <CardImg
            className='CardImg'
            src={image}
            style={{ height: "200px" }}
          />
          <CardBody className='d-flex flex-column justify-content-between'>
            <CardTitle> {title} </CardTitle>
            <CardSubtitle>
              Valor <b>${price}</b>
            </CardSubtitle>
            <CardText>{description}</CardText>
            <ProductSheet
              title={title}
              image={image}
              description={description}
              price={price}
              stock={stock}
              addCart={addCart}
              id={this.props.id}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Product;
