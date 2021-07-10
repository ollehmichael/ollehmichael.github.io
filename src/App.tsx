import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
// PAGES
import * as PageRoute from "./pages/page-route";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import InterestsPage from "./pages/InterestsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={PageRoute.Home.path} exact>
            <HomePage />
          </Route>

          <Route path={PageRoute.AboutMe.path} exact>
            <AboutMePage />
          </Route>

          <Route path={PageRoute.Projects.path} exact>
            <ProjectsPage />
          </Route>

          <Route path={PageRoute.Interests.path} exact>
            <InterestsPage />
          </Route>

          <Route path={PageRoute.Contact.path} exact>
            <ContactPage />
          </Route>

          <Redirect to={PageRoute.Home.path} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
