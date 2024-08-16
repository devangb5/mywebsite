// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCPPrwO_kXf3g4LcXn1pQgv3ArdZITMljo",
    authDomain: "push-notificcations.firebaseapp.com",
    projectId: "push-notificcations",
    storageBucket: "push-notificcations.appspot.com",
    messagingSenderId: "48222894503",
    appId: "1:48222894503:web:079a49a0476ef594d79e82",
    
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // Get the token
    return messaging.getToken();
  })
  .then((token) => {
    console.log('FCM Registration Token:', token);
    // Send this token to your server to store it and use it for sending notifications
  })
  .catch((err) => {
    console.log('Unable to get permission to notify.', err);
  });
  messaging.onTokenRefresh(() => {
    messaging.getToken()
      .then((refreshedToken) => {
        console.log('Token refreshed:', refreshedToken);
        // Save the new token to your server
      })
      .catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
      });
  });