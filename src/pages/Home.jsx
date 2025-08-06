import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import "../components/Product.css";

function Home({ products,setCartItem }) {
  return (
    <Container className="py-4">
      <Row>
        {products.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={3} className="mb-4">
            <Product product={item} setCartItem={setCartItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
