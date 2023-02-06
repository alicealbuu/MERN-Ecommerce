import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = (props) => {
  return (
    <Container>
      <Row className="justify-content-md-center"></Row>
      <Col xs={12} md={6}>
        {props.children}
      </Col>
    </Container>
  );
};

export default FormContainer;
