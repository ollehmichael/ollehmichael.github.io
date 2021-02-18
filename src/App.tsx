import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/protected-route";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsLoggedIn, CurrentUser } from "./modules/global/global-states";
import MenuBar from "./components/menu-bar";
import { Auth } from "./api";
// PAGE IMPORT
// PAGE IMPORT - HOME PAGE / DASHBOARD PAGE IMPORT
import MainPage from "./components/main-page";
import ProjectPage from "./components/project-page";
import ContactPage from "./components/contact-page";
import AboutMePage from "./components/about-me-page";

function App() {
  const isLoggedIn = useRecoilValue(IsLoggedIn);
  useLoggedinState();
  return (
    <div className="App">
      <Router>
        {isLoggedIn && <MenuBar />}
        <Switch>
          <ProtectedRoute path="/" exact>
            <MainPage />
          </ProtectedRoute>

          <ProtectedRoute path="/about-me" exact>
            <AboutMePage />
          </ProtectedRoute>

          <ProtectedRoute path="/projects" exact>
            <ProjectPage />
          </ProtectedRoute>

          <ProtectedRoute path="/contact-me" exact>
            <ContactPage />
          </ProtectedRoute>

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

function useLoggedinState() {
  const setIsLoggedIn = useSetRecoilState(IsLoggedIn);
  const setCurrentUser = useSetRecoilState(CurrentUser);
  useEffect(() => {
    const json = localStorage.getItem("emsd");
    if (json && json !== "") {
      const emsdInfo = JSON.parse(json);
      setIsLoggedIn(true);
      setCurrentUser({
        username: emsdInfo.username,
        isAdmin: emsdInfo.isAdmin,
        accessToken: emsdInfo.accessToken,
      });
      Auth.signIn(emsdInfo.accessToken);
    }
  }, [setCurrentUser, setIsLoggedIn]);
}

export default App;
