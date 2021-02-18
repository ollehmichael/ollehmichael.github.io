import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import * as PageRoute from "../pages/page-route";
import ResponsiveContainer from "../components/ResponsiveContainer";
import FooterContainer from "../components/FooterContainer";
import HomeContent from "../components/HomeContent";

const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em" }} vertical>
      <Container>
        <Grid>
          <Grid.Row style={{ marginBottom: "4em" }}>
            <Grid.Column width={16}>
              <HomeContent
                title="Previous Work and Projects"
                content="I have a various collection of projects ranging from
                authentication systems to several sorting algorithms. This page
                shows you what projects I have done, which languages I used, and
                what I learned from each experience."
                buttonContent="Go to Work / Projects!"
                buttonRoute={PageRoute.Projects.path}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <HomeContent
                title="Contact Me"
                content="You can contact me through many different ways! Please press the button below and shoot me a message!"
                buttonContent="Contact Mike!"
                buttonRoute={PageRoute.Contact.path}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <HomeContent
                title="Other Interests"
                content={`I truly do love programming, but I also like spending my time
                indulging in other hobbies. Find out what hobbies Mike has! \n \n`}
                buttonContent="Who is this guy?"
                buttonRoute={PageRoute.Interests.path}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <FooterContainer />
  </ResponsiveContainer>
);

export default HomePage;
