import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Segment, Visibility } from "semantic-ui-react";
import * as PageRoute from "../pages/page-route";
import HomeHeader from "./HomeHeader";
import { Media } from "./MediaContext";

class DesktopContainer extends Component {
  state = {
    fixed: false,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 400,
              padding: "1em 0em",
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container text>
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
                  Other Interests
                </Menu.Item>
                <Menu.Item
                  as={NavLink}
                  to={PageRoute.AboutMe.path}
                  name="About Me"
                >
                  About Me
                </Menu.Item>
                <Menu.Item
                  as={NavLink}
                  to={PageRoute.Contact.path}
                  name="Contact Mike"
                >
                  Contact Me
                </Menu.Item>
              </Container>
            </Menu>
            <HomeHeader />
          </Segment>
        </Visibility>
        {children}
      </Media>
    );
  }
}
export default DesktopContainer;
