import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Cards = (props) => {
  let image = props.card.urls.regular
  return (
    <>
    <Container>
      <Row className="justify-center">
      <Col lg={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
      </Card>
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default React.memo(Cards);

