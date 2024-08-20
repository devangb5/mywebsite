importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCVeeFxPw1jF5f_rHyofYg0fOEXD3qivbw",
    authDomain: "push-38cca.firebaseapp.com",
    databaseURL: "https://push-38cca-default-rtdb.firebaseio.com",
    projectId: "push-38cca",
    storageBucket: "push-38cca.appspot.com",
    messagingSenderId: "311060497968",
    appId: "1:311060497968:web:feb247239ee93c067ccff5",
    measurementId: "G-HXG39MJW55"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(payload => {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title || 'No Title';
    const notificationOptions = {
        body: payload.notification.body || 'No Body',
        icon: payload.notification.icon || 'https://aroundtheville.com/wp-content/uploads/2024/06/food-trucks-cover.webp', // Ensure default icon path is valid
        data:{
        url : payload.notification.url || 'https://aroundtheville.com'}
      };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
self.addEventListener('notificationclick', (event) => {
  const url = event.notification.data.url || '/'; // Default to home if no URL

  event.notification.close(); // Close the notification

  event.waitUntil(
    clients.openWindow(url)
  );
});