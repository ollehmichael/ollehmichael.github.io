import { atom } from "recoil";

export const IsLoggedIn = atom<boolean>({
  key: "global/is_logged_in",
  default: false,
});

type User = {
  username: string;
  isAdmin: boolean;
  accessToken: string;
};

export const CurrentUser = atom<User>({
  key: "global/CurrentUser",
  default: {
    username: "",
    isAdmin: false,
    accessToken: "",
  },
});

export type NotificationType = {
  title: string;
  message: string;
  level: number;
  action?: string;
  action_url?: string;
};

export const Notification = atom<NotificationType | undefined>({
  key: "global/Notification",
  default: undefined,
});
