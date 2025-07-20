import { Card, Button } from "react-bootstrap";
import "./Product.css";

function Product({ product }) {
  return (
    <>
     <Card style={{ height: "100%" }}>
     
      <Card.Img variant="top" src={product.productPhoto} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.productDescription}</Card.Text>
        <h5>₹ {product.productPrice}</h5>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </>
   
  );
}

export default Product;
