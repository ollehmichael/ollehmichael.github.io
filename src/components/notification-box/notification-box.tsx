import React from "react";
import { useNotificationBoxHooks } from "./notification-box-hooks";
import { pastelGreen, pastelYellow, pastelPink } from "../../assets/colors";

const NotificationBox = () => {
  const notifications = useNotificationBoxHooks();
  return (
    <div style={{ position: "absolute", top: "1em", right: "1em" }}>
      {notifications.map((notification) => (
        <div
          style={{
            position: "relative",
            top: "1em",
            right: "1em",
            width: 300,
            border: `1px solid ${getColor(notification.level)}`,
            borderRadius: "0.5em",
            backgroundColor: getColor(notification.level),
            marginBottom: "1em",
            padding: "1em",
          }}
        >
          <span>{notification.title}</span>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

function getColor(level: number) {
  switch (level) {
    case 0:
      return pastelGreen;
    case 1:
      return pastelYellow;
    case 2:
      return pastelPink;
    default:
      return pastelGreen;
  }
}

export default NotificationBox;
