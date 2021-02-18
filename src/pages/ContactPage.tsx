import React from "react";
import { Button, Container, Icon, Grid, Segment } from "semantic-ui-react";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EmailContainer from "../components/EmailContainer";

const ContactMePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <p style={{ fontSize: "2em" }}>Please feel free to contact me!</p>
              <EmailContainer />
            </Grid.Column>
            <Grid.Column width={8}>
              <p style={{ fontSize: "2em" }}>
                Here are some other ways to contact me!
              </p>
              <Grid.Row>
                <Grid.Column width={8} style={{ marginBottom: "2em" }}>
                  <Button
                    color="facebook"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                    href="https://www.facebook.com/koreanfreakc/"
                  >
                    <Icon name="facebook" /> Facebook
                  </Button>
                  <Button
                    color="instagram"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                    href="https://www.instagram.com/ollehmichael/"
                  >
                    <Icon name="instagram" /> Instagram
                  </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button
                    color="linkedin"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                    href="https://www.linkedin.com/in/byong-cheol-han-60127b1b7/"
                  >
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </Grid.Column>
                <br />
                <p>Phone Number (Korea) : +82 10 5245 3442</p>
                <p>Phone Number (Hong Kong) : +852 9185 1987</p>
                <p>School Email : bchanac@connect.ust.hk</p>
                <p>Personal Email : byongcheolhan@gmail.com</p>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default ContactMePage;
