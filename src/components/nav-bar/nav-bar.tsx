import React from "react";
import { Image, Menu } from "semantic-ui-react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const fullUrl = pathname ? pathname.split("/") : "";
  const currentPath = fullUrl.length > 1 ? fullUrl[1] : "";
  return (
    <div>
      <Menu
        secondary
        style={{
          width: "100vw",
          fontSize: "1vw",
        }}
      >
        <Menu.Item header style={{ marginLeft: "15vw" }}>
          {"Welcome to My Website"}
        </Menu.Item>
        <Menu.Item
          header
          as={NavLink}
          to="/"
          name="Home"
          active={currentPath === ""}
          style={{ marginLeft: "10vw" }}
        />
        <Menu.Item
          as={NavLink}
          to="/about-mike"
          name="About Me"
          active={currentPath === "about-mike"}
          style={{ marginLeft: "2vw" }}
        />
        <Menu.Item
          as={NavLink}
          to="/hire-me-please"
          name="Contact Me"
          active={currentPath === "hire-me-please"}
          style={{ marginLeft: "2vw" }}
        />
        <Menu.Item
          as={NavLink}
          to="/projects"
          name="Projects"
          active={currentPath === "projects"}
          style={{ marginLeft: "2vw" }}
        />
        <Menu.Item
          as={NavLink}
          to="/interests"
          name="Interests"
          active={currentPath === "interests"}
          style={{ marginLeft: "2vw", marginRight: "15vw" }}
        />
      </Menu>
    </div>
  );
};

export default NavBar;
