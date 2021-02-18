import React from "react";
import { Menu } from "semantic-ui-react";
import { Auth } from "../../api";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  const { pathname } = useLocation();
  const fullUrl = pathname ? pathname.split("/") : "";
  const currentPath = fullUrl.length > 1 ? fullUrl[1] : "";
  return (
    <div>
      {/* <EMSDBar /> */}
      <Menu pointing secondary>
        <Menu.Item
          as={NavLink}
          to="/"
          name="HOME"
          active={currentPath === ""}
        />
        <Menu.Item
          as={NavLink}
          to="/about"
          name="ABOUT"
          n
          active={currentPath === "about-me"}
        />
        <Menu.Item
          as={NavLink}
          to="/resume"
          name="RESUME"
          active={currentPath === "projects"}
        />
        <Menu.Item
          as={NavLink}
          to="/projects"
          name="PROJECTS"
          active={currentPath === "projects"}
        />
        <Menu.Item
          as={NavLink}
          to="/contact"
          name="CONTACT"
          active={currentPath === "contact-me"}
        />
      </Menu>
    </div>
  );
};

// const EMSDBar = () => (
//   <div style={{ width: "100%", height: "8em", display: "flex", padding: 24 }}>
//     <EMSDLogoContainer />
//     <TitleContainer />
//     <div
//       style={{
//         width: 0,
//         borderRight: `1px solid #e3e6e9`,
//         marginLeft: "1em",
//         marginRight: "1em",
//       }}
//     />
//     <ProjectNameContainer />
//     <div style={{ flex: 1 }} />
//   </div>
// );

function onSignOut() {
  Auth.signOut();
  localStorage.removeItem("emsd");
}

export default MenuBar;
