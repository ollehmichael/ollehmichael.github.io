import React, { FC } from "react";
import { Route } from "react-router";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../../modules/global/global-states";
import { Auth } from "../../api";
import LoginPage from "../login-page";

type ProtectedRoute = {
  path: string;
  exact?: boolean;
};

const ProtectedRoute: FC<ProtectedRoute> = (props) => {
  const { path, exact } = props;
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  if (isLoggedIn && (Auth.getJWT() === "" || Auth.getJWT() === undefined)) {
    setIsLoggedIn(false);
    return (
      <Route path={path} exact={exact}>
        <LoginPage />
      </Route>
    );
  } else if (!isLoggedIn) {
    return (
      <Route path={path} exact={exact}>
        <LoginPage />
      </Route>
    );
  }
  return (
    <Route path={path} exact={exact}>
      {props.children}
    </Route>
  );
};

export default ProtectedRoute;
