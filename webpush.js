import webpush from "web-push";

const vapidKeys = {
  publicKey:
    "xx",
  privateKey: "xxx",
};

webpush.setVapidDetails(
  "mailto:email@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.comxxx",
  expirationTime: null,
  keys: {
    p256dh:
      "xx",
    auth: "xx",
  },
};

webpush
  .sendNotification(pushSubscription, "Your Push Payload Text")
  .then(() => {
    console.log("Push notification sent successfully.");
  })
  .catch((error) => {
    console.error("Error sending push notification:", error);
  });
