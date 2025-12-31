# Backend Integration Plan for Excel 5.0 (Firebase + Excel Export)

## 1. Technology Choice: Firebase
-   **Database**: **Cloud Firestore** (NoSQL, perfect for nested team data).
-   **Serverless**: Direct integration from frontend JS.

## 2. **"Export to Excel" Feature**
You asked if Firebase generates Excel reports.
-   **Default Behavior**: Firebase stores data as JSON documents. It does **not** have a built-in "Download .xlsx" button.
-   **Our Solution**: We will build a simple **Admin Dashboard** (`admin.html`).
    -   It will fetch all registration data from Firebase.
    -   We will use a JavaScript library called **SheetJS (xlsx)**.
    -   You will have a button: **"Download Registration Report"**.
    -   Clicking this will generate a perfectly formatted Excel file with separate sheets (e.g., one sheet for "All Registrations", or separate sheets for each Event) directly, instantly.

## 3. Implementation Roadmap

### Step 1: Firebase Project Setup (User Action Required)
1.  Go to [console.firebase.google.com](https://console.firebase.google.com/).
2.  Create a project named `excel-5-0`.
3.  Register a Web App and **Copy the `firebaseConfig` keys**.
4.  Create a **Firestore Database** in **Test Mode**.

### Step 2: Connect Frontend to Firebase
1.  I will create `js/firebase-config.js` with your keys.
2.  I will update `register.html` to send the JSON data to Firestore.
    -   *Logic will handle the dynamic 7-person team for "Strange Rhythms".*

### Step 3: Create Admin Export Tool
1.  Create `admin.html`.
2.  Add logic to fetch all documents from the `registrations` collection.
3.  Flatten the data (convert the complex nested JSON into row-column format suitable for Excel).
4.  Implement `SheetJS` to save the file as `Excel5_Registrations.xlsx`.

## 4. Next Steps
-   **Please provide the `firebaseConfig` object** from your Firebase Console.
-   Once I have that, I can build both the Registration logic and the Excel Export tool for you.
