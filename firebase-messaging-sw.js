// firebase-messaging-sw.js


importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCPPrwO_kXf3g4LcXn1pQgv3ArdZITMljo",
	  authDomain: "push-notificcations.firebaseapp.com",
	  projectId: "push-notificcations",
	  storageBucket: "push-notificcations.appspot.com",
	  messagingSenderId: "48222894503",
	  appId: "1:48222894503:web:079a49a0476ef594d79e82",
	  measurementId: "G-8G3SJQ59JE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: './wp-content/' // Customize your icon path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});