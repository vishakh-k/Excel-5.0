# Excel 5.0 - National Level Tech Fest 2026

## Overview
**Excel 5.0** is the ultimate National Level Tech Fest organized by the Department of MCA, **Srinivas Institute of Technology**, Mangaluru.
The website features a highly interactive **Stranger Things** theme with a dark/red aesthetic, dynamic animations, and a seamless user experience.

**Event Date:** February 18, 2026  
**Theme:** Stranger Things | Innovate. Compete. Dominate.

---

## 🚀 Key Features

### 🎨 Immersive UI/UX
- **Stranger Things Theme:** Iconic black & red color palette (`#DC143C`), custom retro fonts, and atmospheric design.
- **Video Loader:** Cinematic intro video overlay with auto-fade and skip functionality (`video-loader.js`).
- **Interactive Elements:** Smooth screw-scrolling, hover effects, card lifts, and glowing red shadows.
- **Audio Experience:** Background audio integration (`audio-player.js`).

### 📅 Events & Registration
- **Event Showcase:** 8+ Major events including coding battles (Strange Syntax), IT Quiz (Stranger Bytes), Gaming (Upside Down), and Cultural events.
- **Registration System:**
  - **Firebase Integration:** Real-time data storage for team and participant details.
  - **KonfHub & Hackathon Links:** Direct integration for external event registrations (e.g., Solveathon 1.0).
  - **Brochure:** One-click download for the event brochure.

### 🛡️ Admin Dashboard (`admin.html`)
- **Security:** Secured access using client-side **SHA-256 hash verification** (Secret Code required).
- **Real-Time Data:** Live fetching of registration data from **Firebase Firestore**.
- **Excel Export:** Robust "Export to Excel" feature powered by **SheetJS**:
  - Generates a "Master Summary" of college participation.
  - Creates individual sheets for every event with participant & team leader details.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid, Keyframe Animations)
- **Backend:** Firebase Firestore (NoSQL Database)
- **Libraries:**
  - [SheetJS (xlsx)](https://sheetjs.com/) - For Admin Excel Export
  - [FontAwesome](https://fontawesome.com/) - For Icons
  - [Firebase SDK](https://firebase.google.com/) - For Backend Services

## 📂 Project Structure

```
frontend/
├── css/
│   ├── styles.css       # Main stylesheet (Theme, Layout, Components)
│   └── animations.css   # Animation keyframes and utilities
├── js/
│   ├── main.js          # Core logic, navigation, and UI interactions
│   ├── firebase-config.js # Firebase SDK configuration
│   ├── video-loader.js  # Intro video loader logic
│   └── audio-player.js  # Audio player control
├── images/              # Assets (Logos, Backgrounds, Event Posters)
├── admin.html           # Secured Admin Dashboard
├── index.html           # Main Landing Page
├── register.html        # Registration Form
└── events.html          # Event Listings
```

## ⚙️ Setup & Deployment

1. **Local Development:**
   - Clone the repository.
   - Open `index.html` in any modern web browser.
   - *Note:* For Firebase features to work locally, ensure `firebase-config.js` is correctly set up with valid credentials.

2. **Admin Access:**
   - Navigate to `/admin.html`.
   - Enter the provided **Secret Code**.
   - If authenticated, the dashboard will reveal participant data and export options.

## 👥 Credits

**Designed & Developed by:**  
[**Vishakh K T**](https://www.linkedin.com/in/vishakh-k-t-0105bb2ba/)  
*Department of MCA, Srinivas Institute of Technology*

&copy; 2026 Excel 5.0. All rights reserved.
