


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Your web app's Firebase configuration
document.addEventListener('DOMContentLoaded', () => {
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
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  // Request permission to send notifications
  document.getElementById('subscribe').addEventListener('click', () => {
    messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return messaging.getToken();
      })
      .then((token) => {
        console.log('FCM Token:', token);
        // You might want to send this token to your server for later use
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  });

  // Handle incoming messages when the app is in the foreground
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // Customize notification handling here
    const { title, body } = payload.notification;
    new Notification(title, {
      body: body,
      icon: payload.notification.icon
    });
  });

  // Register the service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((err) => {
        console.log('Service Worker registration failed:', err);
      });
  }
});
