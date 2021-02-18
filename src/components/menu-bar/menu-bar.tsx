import React from "react";
import EMSDLogo from "../../assets/emsd_logo.png";
import { Image, Menu } from "semantic-ui-react";
import { Auth } from "../../api";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "./menu-bar.css";

const MenuBar = () => {
  const { pathname } = useLocation();
  const fullUrl = pathname ? pathname.split("/") : "";
  const currentPath = fullUrl.length > 1 ? fullUrl[1] : "";
  return (
    <div>
      <EMSDBar />
      <Menu pointing secondary>
        <Menu.Item
          style={{ marginLeft: "20vw", marginRight: "1vw" }}
          as={NavLink}
          to="/dashboard"
          name="Home"
          active={currentPath === ""}
        />
        <Menu.Item
          style={{ marginLeft: "1vw", marginRight: "1vw" }}
          as={NavLink}
          to="/about-me"
          name="About Mike"
          active={currentPath === "about-me"}
        />
        <Menu.Item
          style={{ marginLeft: "1vw", marginRight: "1vw" }}
          as={NavLink}
          to="/projects"
          name="Projects"
          active={currentPath === "projects"}
        />
        <Menu.Item
          style={{ marginLeft: "1vw", marginRight: "1vw" }}
          as={NavLink}
          to="/study-with-mike"
          name="Self-Study Blog"
          active={currentPath === "study-with-mike"}
        />
        <Menu.Item
          style={{ marginLeft: "1vw", marginRight: "20vw" }}
          as={NavLink}
          to="/contact-mike-right-now"
          name="Contact Me"
          active={currentPath === "contact-me-right-now"}
        />
      </Menu>
    </div>
  );
};

const EMSDBar = () => (
  <div
    style={{
      width: "100vw",
      height: "8em",
      display: "flex",
      padding: 24,
      backgroundColor: "grey",
    }}
  >
    {"Photo will be here"}
  </div>
);

function onSignOut() {
  Auth.signOut();
  localStorage.removeItem("emsd");
}

export default MenuBar;
