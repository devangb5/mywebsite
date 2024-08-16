// firebase-messaging-sw.js


importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js');


firebase.initializeApp({
    apiKey: "AIzaSyCVeeFxPw1jF5f_rHyofYg0fOEXD3qivbw",
    authDomain: "push-38cca.firebaseapp.com",
    projectId: "push-38cca",
    storageBucket: "push-38cca.appspot.com",
    messagingSenderId: "311060497968",
    appId: "1:311060497968:web:feb247239ee93c067ccff5",
    measurementId: "G-HXG39MJW55"
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