import { useSetRecoilState } from "recoil";
import { Notification } from "../../modules/global/global-states";
import { useEffect } from "react";

export function useDashboardPageHooks() {
  const setNotification = useSetRecoilState(Notification);
  useEffect(() => {
    setNotification({
      title: "Random notification",
      message: "Error message",
      level: 2,
    });
  }, [setNotification]);
}
