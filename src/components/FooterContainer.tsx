import React from "react";
import { List } from "semantic-ui-react";

type FooterProps = {
  as: string;
  link: string;
  title: string;
};

const FooterContainer: React.FC<FooterProps> = (props) => {
  const { as, link, title } = props;
  return (
    <div>
      <List.Item as={as} onClick={() => window.open(link, "_blank")}>
        {title}
      </List.Item>
    </div>
  );
};

export default FooterContainer;
