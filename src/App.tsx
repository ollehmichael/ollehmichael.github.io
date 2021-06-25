import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar";
// PAGES
import DashboardPage from "./components/dashboard-page/dashboard-page";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* HOME PAGE / DASHBOARD PAGE */}
          <Route path="/" exact>
            <DashboardPage />
          </Route>

          {/* ABOUT ME PAGE */}
          <Route path="/about-mike" exact>
            {/* <AboutMePage /> */}
          </Route>

          {/* CONTACT PAGE */}
          <Route path="/hire-me-please" exact>
            {/* <ContactPage /> */}
          </Route>

          {/* PROJECTS PAGE */}
          <Route path="/projects" exact>
            {/* <ProjectsPage /> */}
          </Route>

          {/* INTERESTS PAGE */}
          <Route path="/interests" exact>
            {/* <InterestsPage /> */}
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
