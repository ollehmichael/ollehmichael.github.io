import React from "react";
import { Button, Container, Icon, Grid, Segment } from "semantic-ui-react";
import ResponsiveContainer from "../components/ResponsiveContainer";

const ContactMePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>{"ContactMeContainer"}</Grid.Column>
            <Grid.Column width={8} verticalAlign="middle">
              <p style={{ fontSize: "2em" }}>
                You can also reach me at these Social Media!
              </p>
              <Grid.Row>
                <Grid.Column width={8} style={{ marginBottom: "2em" }}>
                  <Button
                    color="facebook"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                  >
                    <Icon name="facebook" /> Facebook
                  </Button>
                  <Button
                    color="twitter"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                  >
                    <Icon name="twitter" /> Twitter
                  </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button
                    color="linkedin"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                  >
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                  <Button
                    color="instagram"
                    size="large"
                    style={{ marginRight: "2em", width: "10em" }}
                  >
                    <Icon name="instagram" /> Instagram
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default ContactMePage;
