import { Button, notification } from "antd";

const openNotification = () => {
  console.log(document.body);

  console.log(document.querySelector("#er"));

  notification.open({
    message: "Notification Title",
    placement: "bottomRight",
    getContainer: () => {
      return document.querySelector("#er");
    },
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

export const Notefi = () => {
  return (
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  );
};
