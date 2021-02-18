import React from "react";
import { Button, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

type HomeContentProps = {
  title: string;
  content: string;
  buttonContent: string;
  buttonRoute: string;
};

const HomeContent: React.FC<HomeContentProps> = (props) => {
  const { title, content, buttonContent, buttonRoute } = props;
  return (
    <div>
      <Header as="h3" style={{ fontSize: "2em" }}>
        {title}
      </Header>
      <h5 style={{ fontSize: "1.33em" }}>{content}</h5>
      <Button as={NavLink} to={buttonRoute} size="large">
        {buttonContent}
      </Button>
    </div>
  );
};

export default HomeContent;
