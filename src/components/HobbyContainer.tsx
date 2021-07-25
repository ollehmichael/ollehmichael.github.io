import React from "react";
import { Button, Header, Divider } from "semantic-ui-react";

type HobbyProps = {
  title: string;
  heading: string;
  content: string;
};

const HobbyContainer: React.FC<HobbyProps> = (props) => {
  const { title, heading, content } = props;
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
    </div>
  );
};

export default HobbyContainer;
