import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo.png";

function Header(props) {
  const {title, content, col} = props;
  return (
    <>
      <img src={Logo} className="mb-5" alt="" />
      <Container>
        <Row>
          <Col md={col || 12}>
            <p className="heading text-start mb-0">{title}</p>
          </Col>
          <Col md={col || 12}>
            <p className="info text-start mb-5">{content}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
