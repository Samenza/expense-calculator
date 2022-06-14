import React, { createContext, useContext, useState } from "react";

const notificationContext = createContext();
const NotificationContextProvider = (props) => {
  const [notification, setNotification] = useState({
    show: false,
    message: "با موفقیت اضافه شد!",
    severity: "success",
  });
  return (
    <notificationContext.Provider value={{ notification, setNotification }}>
      {props.children}
    </notificationContext.Provider>
  );
};

export default NotificationContextProvider;

export const useNotificationContext = () => {
  const context = useContext(notificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must use in NotificationContextProvider"
    );
  }
  return context;
};
