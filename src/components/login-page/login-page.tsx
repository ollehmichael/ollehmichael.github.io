import React, { useState } from "react";
import { Login, Auth } from "../../api";
import {
  IsLoggedIn,
  CurrentUser,
  Notification,
} from "../../modules/global/global-states";
import { useSetRecoilState } from "recoil";
import { Form } from "semantic-ui-react";

const LoginPage = () => {
  const setIsLoggedIn = useSetRecoilState(IsLoggedIn);
  const setCurrentUser = useSetRecoilState(CurrentUser);
  const setNotification = useSetRecoilState(Notification);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState<undefined | string>(
    undefined
  );
  const [passwordError, setPasswordError] = useState<undefined | string>(
    undefined
  );

  function onSubmitHandler() {
    const usrname = username.trim();
    const pw = processPassword(password);
    if (!validate(usrname, pw)) {
      return;
    }
    Login(username, pw)
      .then((res) => {
        if (res && res.accessToken) {
          Auth.signIn(res.accessToken);
          setIsLoggedIn(true);
          setCurrentUser({
            username: res.username,
            isAdmin: res.isAdmin,
            accessToken: res.accessToken,
          });
          localStorage.setItem("emsd", JSON.stringify(res));
        } else {
          setNotification({
            title: "Login Error",
            message: `Invalid response: ${JSON.stringify(res)}`,
            level: 2,
          });
        }
      })
      .catch((err) => {
        setNotification({
          title: "Network error",
          message: `Failed to send login request: ${JSON.stringify(err)}`,
          level: 2,
        });
      });
  }

  function validate(usrname: string, pw: string) {
    setUsernameError(undefined);
    setPasswordError(undefined);
    let isError = false;
    if (!usrname || !usrname.length) {
      isError = true;
      setUsernameError("Please input username");
    }
    if (!pw || !pw.length) {
      isError = true;
      setPasswordError("Please input password");
    }
    if (isError) return false;
    return true;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        className="LoginForm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <label>Username</label>
        <Form.Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
        />
        <label>Password</label>
        <Form.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <Form.Button
          onClick={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          Login
        </Form.Button>
      </Form>
    </div>
  );
};

function processPassword(password: string): string {
  const newPassword = password.trim();
  const saltedPasword = newPassword; // + "salt";
  const hashedPassword = saltedPasword;
  return hashedPassword;
}

export default LoginPage;
