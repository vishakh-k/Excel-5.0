# Backend / Admin Panel

This directory contains the "Backend" resources for Excel 5.0.
Since we are using **Google Firebase (Serverless)**, we do not require a running server process (like Python or Node.js).

## Contents
1.  **Firebase Configuration**: Central configuration file to connect to the database.
2.  **Admin Dashboard**: A secure(ish) page to view registrations and **Export Data to Excel**.
3.  **Security Rules**: (Future) Firestore rules to ensure only admins can read data.

## Setup
Ensure you have the `firebaseConfig` keys ready from the [Firebase Console](https://console.firebase.google.com/).
