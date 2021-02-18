import React from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import * as PageRoute from "../pages/page-route";

const HomeHeader = ({ mobile = false }) => (
  <Container text style={{ height: "10em" }}>
    <Header
      as="h1"
      // content="Welcome! This is Mike's Space."
      content="Mike's website is currently under construction! Please be patient :)"
      inverted
      style={{
        fontSize: mobile === true ? "1.5em" : "2em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile === true ? "1.5em" : "3em",
      }}
    />
    {/* <Header
      as="h2"
      content="Hire me please. I'll be gentle."
      inverted
      style={{
        fontSize: mobile === true ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile === true ? "0.5em" : "1.5em",
      }}
    /> */}
    <Button
      as={NavLink}
      to={PageRoute.AboutMe.path}
      name="About Me"
      primary
      size={mobile === true ? "small" : "huge"}
      style={{ marginTop: mobile === true ? "1em" : "1em" }}
    >
      About Mike
      <Icon name="arrow right" />
    </Button>
  </Container>
);

export default HomeHeader;
