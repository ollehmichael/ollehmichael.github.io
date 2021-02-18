import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import {
  Notification,
  NotificationType,
} from "../../modules/global/global-states";

export function useNotificationBoxHooks() {
  const notfication = useRecoilValue(Notification);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    if (notfication) {
      setNotifications((prev) => prev.concat(notfication));
      setTimeout(() => {
        setNotifications((prev) => {
          const arr = [...prev];
          arr.shift();
          return arr;
        });
      }, 5000);
    }
  }, [notfication]);
  return notifications;
}
