import React from "react";
import { Card,Col } from "react-bootstrap";

const Cards = (props) => {
  let image = props.card.urls.regular;
  return (
    <>
      <Card>
        <Col>
          <Card.Img variant="top" src={image} className="img" />
        </Col>
      </Card>
    </>
  );
};

export default React.memo(Cards);
