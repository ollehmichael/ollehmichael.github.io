import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Segment, Sidebar, Icon } from "semantic-ui-react";
import * as PageRoute from "../pages/page-route";
import HomeHeader from "./HomeHeader";
import { Media } from "./MediaContext";

class MobileContainer extends Component {
  state = {
    sidebarOpened: false,
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={NavLink} to={PageRoute.Home.path} name="Home">
              Home
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to={PageRoute.Projects.path}
              name="Work / Projects"
            >
              Work / Projects
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to={PageRoute.Interests.path}
              name="Interests"
            >
              Interests
            </Menu.Item>
            <Menu.Item as={NavLink} to={PageRoute.AboutMe.path} name="About Me">
              About Me
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to={PageRoute.Contact.path}
              name="Contact Mike"
            >
              Contact Mike Right Now
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 200, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomeHeader mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

export default MobileContainer;
