
export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications");
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === "granted";
};

export const sendNotification = (title: string, options?: NotificationOptions) => {
  if (document.hidden && Notification.permission === "granted") {
    // Send browser notification if user is not on the tab
    new Notification(title, options);
  }
  return true;
};
