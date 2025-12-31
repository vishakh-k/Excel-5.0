const firebaseConfig = {
    apiKey: "AIzaSyCbnqvszzQ4e2E-Cym80vvcguH0bbvfVxY",
    authDomain: "excel-5-0.firebaseapp.com",
    projectId: "excel-5-0",
    storageBucket: "excel-5-0.firebasestorage.app",
    messagingSenderId: "229239032150",
    appId: "1:229239032150:web:dd4a5f1a6a818d0b556ef7",
    measurementId: "G-2VF0CQ10W2"
};

// Initialize Firebase (Compat version for HTML/CDN usage)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firestore
const db = firebase.firestore();
