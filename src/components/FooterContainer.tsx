import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Social Media" />
            <List link inverted>
              <List.Item as="a">Instagram</List.Item>
              <List.Item as="a">LinkedIn</List.Item>
              <List.Item as="a">GitHub</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contacts" />
            <List link inverted>
              <List.Item as="a">Reach Me</List.Item>
              <List.Item as="a">Resume / CV</List.Item>
              <List.Item as="a">Request for a Meeting </List.Item>
              <List.Item as="a">Request for a Workout Session</List.Item>
            </List>
          </Grid.Column>
          {/* <Grid.Column width={7}>
            <Header as="h4" inverted />
            <p>
              I made this website for fun
              <br />I can make better ones for sure
              <br />
              Hit me up and I'll show you
            </p>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
