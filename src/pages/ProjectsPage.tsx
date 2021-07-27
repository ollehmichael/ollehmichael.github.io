import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ProjectContainer from "../components/ProjectContainer";

const ProjectsPage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          MY WORK
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          I am interested in a wide range of technologies and skills. Below are
          some of the work I have completed to this date! Please check them out
          and feel free to contact me if you have any questions!
        </p>
        <Button href="#project1" size="large">
          Project 1
        </Button>
        <Button href="#project2" size="large">
          Project 2
        </Button>
        <Button href="#project3" size="large">
          Project 3
        </Button>
        <div id="project1">
          <ProjectContainer
            title="Project 1"
            githubLink="github.com/ollehmichael"
            languages="Javascript, React, Typescript"
            description="My first project was to make my portfolio website"
          />
        </div>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default ProjectsPage;
