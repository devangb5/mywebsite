/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js');

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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});