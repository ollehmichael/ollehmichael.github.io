import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import * as PageRoute from "../pages/page-route";
import { NavLink } from "react-router-dom";
import FooterContainer from "./FooterContainer";

const HomeFooter = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Social Media" />
            <List link inverted>
              <FooterContainer
                as="a"
                link="https://www.facebook.com/koreanfreakc/"
                title="Facebook"
              />
              <FooterContainer
                as="a"
                link="https://www.instagram.com/ollehmichael/"
                title="Instagram"
              />
              <FooterContainer
                as="a"
                link="https://www.linkedin.com/in/byong-cheol-han-60127b1b7/"
                title="LinkedIn"
              />
              <FooterContainer
                as="a"
                link="https://github.com/ollehmichael"
                title="GitHub"
              />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contacts" />
            <List link inverted>
              <List.Item
                as={NavLink}
                to={PageRoute.Contact.path}
                name="Reach Me"
              >
                Reach Me
              </List.Item>
              <List.Item
                as={NavLink}
                to={PageRoute.Contact.path}
                name="Download Resume / CV"
              >
                Download Resume / CV
              </List.Item>
              <List.Item
                as={NavLink}
                to={PageRoute.Contact.path}
                name="Request for a Workout Session"
              >
                Request for a Workout Session
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted />
            <p>
              I made this website for fun
              <br />I can make better ones for sure
              <br />
              Hit me up and I'll show you
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default HomeFooter;
