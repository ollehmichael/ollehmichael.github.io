import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/protected-route";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsLoggedIn, CurrentUser } from "./modules/global/global-states";
import MenuBar from "./components/menu-bar";
import { Auth } from "./api";
import NotificationBox from "./components/notification-box";
// PAGE IMPORT
// PAGE IMPORT - HOME PAGE / DASHBOARD PAGE IMPORT
import DashboardPage from "./components/dashboard-page/dashboard-page";
// PAGE IMPORT - ABOUT ME PAGE IMPORT
import AboutMePage from "./components/about-me-page";
// PAGE IMPORT - PROJECTS PAGE IMPORT
import ProjectPage from "./components/project-page";
// PAGE IMPORT - AREAS OF INTEREST PAGE IMPORT
import InterestPage from "./components/interest-page";
// PAGE IMPORT - CONTACT ME PAGE IMPORT
import SmartTroubleShootingPage from "./components/smart-troubleshooting-page";

function App() {
  const isLoggedIn = useRecoilValue(IsLoggedIn);
  useLoggedinState();
  return (
    <div className="App">
      <NotificationBox />
      <Router>
        {isLoggedIn && <MenuBar />}
        <Switch>
          {/* HOME PAGE / DASHBOARD PAGE */}
          <ProtectedRoute path="/" exact>
            <DashboardPage />
          </ProtectedRoute>

          {/* ABOUT ME PAGE */}
          <ProtectedRoute path="/about-me" exact>
            <AboutMePage />
          </ProtectedRoute>

          {/* PROJECT PAGE */}
          <ProtectedRoute path="/projects" exact>
            <ProjectPage />
          </ProtectedRoute>

          {/* AREAS OF INTEREST PAGE */}
          <ProtectedRoute path="/study-with-mike" exact>
            <InterestPage />
          </ProtectedRoute>

          {/* CONTACT ME PAGE */}
          <ProtectedRoute path="/contact-mike-right-now" exact>
            <SmartTroubleShootingPage />
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
