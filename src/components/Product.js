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
    const { image, title, price, description, stock } = this.props;
    return (
      <Col xs='12' sm='6' md='4' lg='3' className='mb-4'>
        <Card className='Card' body outline color='primary'>
          <CardImg src={image} />
          <CardBody>
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
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Product;
