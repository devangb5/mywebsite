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
