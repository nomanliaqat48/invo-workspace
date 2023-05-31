import React from "react";
import Card from "react-bootstrap/Card";
import User from "../../images/user.png";

function WorkspaceCard(props) {
  const { title, content } = props;
  return (
    <Card className="h-100 cursor-pointer">
      <Card.Body>
        <Card.Title>
          <img src={User} alt="" width="130" />
        </Card.Title>
        <div className="card-title mt-3">{title}</div>
        <div className="card-content mt-3">{content}</div>
      </Card.Body>
    </Card>
  );
}

export default WorkspaceCard;
