import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import WorkspaceCard from "./card";
import Logo from "../../images/logo.png";
import { Button } from "react-bootstrap";

function WorkSpace() {
  return (
    <section>
      <Header title="What do you want to do?" content="Let’s get started!" col={{ span: 10, offset: 2 }} />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <WorkspaceCard
              title="I’m trying to access my team’s workspace"
              content="Were you invited to join an existing workspace?"
            />
          </Col>
          <Col md={4}>
            <WorkspaceCard
              title="Create new workspace"
              content="Were you invited to join an existing workspace?Were you invited to join an"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }} className="text-start mt-5">
          <Button style={{backgroundColor: "#11375F", borderColor: "#11375F"}}>Connect</Button>
          </Col>
          </Row>
      </Container>

    </section>
  );
}

export default WorkSpace;
