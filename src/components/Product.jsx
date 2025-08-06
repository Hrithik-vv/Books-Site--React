import { Card, Button } from "react-bootstrap";
import "./Product.css";

function Product({ product, setCartItem }) {

  const handleAddToCart = () => {
    setCartItem((prev) => prev + 1);
  };

  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={product.productPhoto} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.productDescription}</Card.Text>
        <h5>₹ {product.productPrice}</h5>
        <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
