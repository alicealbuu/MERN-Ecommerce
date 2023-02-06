import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center pt-2 pb-1">Copyright &copy; ProTech</Col>
          <div
            className="text-center pb-2"
            onMouseOver={({ target }) => (target.style.color = "#1a1a1a")}
            onMouseOut={({ target }) => (target.style.color = "#55595c")}
          >
            <a href="www.facebook.com" style={{ color: "#55595c" }}>
              <i class="fa-brands fa-facebook fa-lg px-2 inverse"></i>
            </a>
            <a href="www.instagram.com/" style={{ color: "#55595c" }}>
              <i class="fa-brands fa-instagram fa-lg px-2"></i>
            </a>
            <a href="www.twitter.com/" style={{ color: "#55595c" }}>
              <i class="fa-brands fa-twitter fa-lg px-2"></i>
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
