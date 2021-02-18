import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Notification } from "../../modules/global/global-states";

export function useSmartTroubleShootingPageHooks() {
  const setNotification = useSetRecoilState(Notification);
  useEffect(() => {
    setNotification({
      title: "Random notification",
      message: "Error message",
      level: 2,
    });
  }, [setNotification]);
}
