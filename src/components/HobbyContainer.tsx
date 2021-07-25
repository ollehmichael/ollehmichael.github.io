import React from "react";
import { Button, Header, Divider } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

type HobbyProps = {
  title: string;
  heading: string;
  content: string;
  buttonRoute: string;
  buttonContent: string;
};

const HobbyContainer: React.FC<HobbyProps> = (props) => {
  const { title, heading, content, buttonRoute, buttonContent } = props;
  return (
    <div>
      <Divider
        as="h4"
        horizontal
        style={{
          margin: "3em 0em",
          textTransform: "uppercase",
          color: "#1279c6",
        }}
      >
        {title}
      </Divider>
      <Header as="h3" style={{ fontSize: "2em" }}>
        {heading}
      </Header>
      <p style={{ fontSize: "1.33em" }}>{content}</p>
      <Button as={NavLink} to={buttonRoute} size="large">
        {buttonContent}
      </Button>
    </div>
  );
};

export default HobbyContainer;
