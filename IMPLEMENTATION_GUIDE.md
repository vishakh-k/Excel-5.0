# Excel 5.0 Website - Implementation Guide

## Stranger Things Theme | Black & Red Color Scheme

---

## PROJECT OVERVIEW

Build a complete Excel 5.0 event management website with a **Stranger Things** inspired dark aesthetic using **only Black (#000000, #1A1A1A) and Red (#DC143C, #FF0000)** colors.

The website will have three main sections:

1. **FRONTEND** - User-facing website
2. **BACKEND** - Server logic and APIs
3. **ADMIN PANEL** - Admin dashboard for viewing registrations

---

# SECTION 1: FRONTEND

## 1.1 Homepage (index.html)

### Layout Structure:

```
┌─────────────────────────────────────┐
│        NAVIGATION BAR               │  (Sticky, Black bg, Red text)
├─────────────────────────────────────┤
│      GIF ANIMATION (Loading)        │  (Stranger Things style GIF)
├─────────────────────────────────────┤
│      HERO SECTION                   │  (Slide-in animation)
│   "Welcome to Excel 5.0"            │  (Red title, black background)
├─────────────────────────────────────┤
│   [Explore Events] [Register Now]   │  (Red buttons, hover glow)
├─────────────────────────────────────┤
│      FEATURED EVENTS SECTION        │  (Card animations)
├─────────────────────────────────────┤
│      FOOTER                         │  (Google Map, Contact, Copyright)
└─────────────────────────────────────┘
```

### Features:

**Navigation Bar:**

- Logo (Excel 5.0 with Stranger Things font style)
- Menu Items: Home | About | Events | Team | Brochure
- Black background, red text/icons
- Sticky positioning
- Hamburger menu for mobile
- Active link indicator (red underline)
- Smooth hover animations
- Two prominent buttons: "Brochure" and "Register Now" (red with glow)

**GIF Section:**

- Loading video plays on page load (full screen overlay)
- Stranger Things opening-style GIF animation
- Auto-plays and auto-fades after 3-5 seconds
- Centered GIF in the middle of screen
- Fade-out transition to main content
- Skip button available (optional)

**Hero Section:**

- Large red title with shadow effect
- Tagline in white text
- Background: Black gradient or subtle pattern
- Slide-in animation from top
- Responsive design

**Action Buttons:**

- "Explore Events" - Red background, black text, glow effect on hover
- "Register Now" - Red background, black text, glow effect on hover
- Pulse animation on hover
- Cursor pointer

**Featured Events:**

- Display 3-4 latest events
- Event cards with:
  - Event image with red border
  - Title in red
  - Date/time in white
  - Description
  - "Learn More" button
- Hover effects: Lift + Red glow shadow
- Fade-in animation on scroll

**Footer:**

- Google Map (black background, red markers)
- Contact Details:
  - Email
  - Phone
  - Address
- Social Media Links (red icons)
- "Developed by [Your Name]" in red
- Copyright notice in white
- All text on black background

---

## 1.2 About Page (about.html)

### Layout:

```
┌─────────────────────────────────────┐
│        NAVIGATION BAR               │
├─────────────────────────────────────┤
│   ABOUT SECTION (Slide-in)          │
│   Company Description               │
│   Mission (Red heading)             │
│   Vision (Red heading)              │
│   History/Timeline                  │
│   Key Achievements                  │
└─────────────────────────────────────┘
```

### Features:

- Red section headings
- Black background with white text
- Images with red borders/shadows
- Fade-in animations on scroll
- Timeline with red markers/connectors
- Responsive layout

---

## 1.3 Events Page (events.html)

### Layout:

```
┌─────────────────────────────────────┐
│        NAVIGATION BAR               │
├─────────────────────────────────────┤
│   EVENT COUNT (Red highlight)       │
│   "Total Events: X"                 │
├─────────────────────────────────────┤
│   FILTER OPTIONS                    │
│   [Filter by Date] [Filter by Type] │
├─────────────────────────────────────┤
│   EVENT CARDS GRID                  │
│   ┌─────────┐  ┌─────────┐         │
│   │ Event 1 │  │ Event 2 │  ...    │
│   └─────────┘  └─────────┘         │
└─────────────────────────────────────┘
```

### Features:

- Event count display (prominent, red text)
- Filter buttons with smooth transitions
- Event cards in grid layout:
  - Card border: Red
  - Title: Red
  - Date/Location: White
  - Description: Gray
  - "Register" button: Red with hover glow
- Hover effects: Lift + scale + red shadow glow
- Fade-in animations on scroll
- Responsive (1 column mobile, 2-3 columns desktop)

---

## 1.4 Team Page (team.html)

### Layout:

```
┌─────────────────────────────────────┐
│        NAVIGATION BAR               │
├─────────────────────────────────────┤
│   TEAM HEADING (Red)                │
├─────────────────────────────────────┤
│   TEAM MEMBER CARDS                 │
│   ┌─────────────────┐              │
│   │   [Photo]       │              │
│   │   Name (Red)    │              │
│   │   Position      │              │
│   │   Bio           │              │
│   │  [Icons - Red]  │              │
│   └─────────────────┘              │
└─────────────────────────────────────┘
```

### Features:

- Team member cards with:
  - Photo with red border/shadow
  - Name in red
  - Position/role in white
  - Bio in gray
  - Social icons in red
- Card animations:
  - Entrance: Fade-in + slide-up
  - Hover: Flip effect or lift effect + red glow
- Black background, red accents
- Responsive grid layout

---

## 1.5 Registration Page (register.html)

### Layout:

```
┌─────────────────────────────────────┐
│        NAVIGATION BAR               │
├─────────────────────────────────────┤
│   REGISTRATION FORM                 │
│   (Slide-in from bottom animation)  │
│                                     │
│   Full Name [____________]          │
│   Email [____________]              │
│   Phone [____________]              │
│   Event [Select Event ▼]            │
│   Message [____________]            │
│   [ ] I agree to terms              │
│                                     │
│   [REGISTER] (Red button)           │
│                                     │
│   Success Message (if submitted)    │
└─────────────────────────────────────┘
```

### Features:

- Form title in red
- Input fields with:
  - Black background
  - Red border on focus
  - White text
  - Placeholder text in gray
  - Smooth focus animation
- Dropdown with red theme
- Checkbox with red accent
- Submit button:
  - Red background
  - Black text
  - Hover: Glow effect + scale
- Form validation with error messages (red text)
- Success message with fade-in animation
- Responsive design

---

## 1.6 Frontend File Structure

```
frontend/
├── index.html              (Homepage)
├── about.html              (About page)
├── events.html             (Events listing)
├── team.html               (Team page)
├── register.html           (Registration form)
│
├── css/
│   ├── styles.css          (Main stylesheet - Red & Black theme)
│   ├── animations.css      (All animations & keyframes)
│   ├── cards.css           (Card styling & transitions)
│   └── responsive.css      (Mobile responsive design)
│
├── js/
│   ├── main.js             (Main functionality)
│   ├── animations.js       (Animation triggers - AOS integration)
│   ├── form-validation.js  (Registration form validation)
│   ├── api.js              (API calls to backend)
│   ├── navbar.js           (Navigation functionality)
│   └── video-loader.js     (GIF animation control)
│
├── videos/
│   └── stranger-things-intro.gif  (Stranger Things style GIF)
│
├── images/
│   ├── logo.png            (Excel 5.0 logo - Red & Black)
│   ├── events/             (Event images)
│   ├── team/               (Team member photos)
│   └── assets/             (Other images)
│
└── README.md
```

---

## 1.7 CSS Framework & Libraries

**Core CSS:**

- CSS3 with custom animations
- CSS Grid & Flexbox for layout
- Custom properties (CSS variables) for theme colors

**Color Variables (in CSS):**

```css
:root {
  --primary-red: #dc143c;
  --bright-red: #ff0000;
  --primary-black: #000000;
  --dark-black: #1a1a1a;
  --light-gray: #cccccc;
  --white: #ffffff;
}
```

**Libraries:**

- AOS (Animate On Scroll) - for scroll animations
- Font: "Courier New" or similar monospace (Stranger Things vibe)
- Icon library: Font Awesome (for red colored icons)

---

## 1.8 Key Animations (Frontend)

| Animation         | Element       | Duration | Trigger   |
| ----------------- | ------------- | -------- | --------- |
| Fade-in           | Page load     | 0.6s     | Page load |
| Slide-in (top)    | Hero section  | 0.8s     | Page load |
| Slide-in (bottom) | Forms         | 0.6s     | Page load |
| Lift + glow       | Cards hover   | 0.3s     | Hover     |
| Zoom              | Images hover  | 0.3s     | Hover     |
| Pulse             | Buttons hover | 0.4s     | Hover     |
| Flip/Rotate       | Team cards    | 0.6s     | Hover     |
| Underline slide   | Nav links     | 0.3s     | Hover     |
| Red glow          | Button hover  | 0.3s     | Hover     |

---

# SECTION 2: BACKEND

## 2.1 Backend Architecture

```
backend/
├── server.js               (Main Express server)
├── config.js               (Configuration - database, secrets)
├── .env                    (Environment variables)
│
├── routes/
│   ├── auth.js             (Admin login/logout)
│   ├── events.js           (GET events - public API)
│   ├── registrations.js    (POST registrations, GET for admin)
│   └── team.js             (GET team members)
│
├── controllers/
│   ├── authController.js   (Login logic, JWT)
│   ├── eventController.js  (Event logic)
│   ├── registrationController.js (Registration logic)
│   └── teamController.js   (Team logic)
│
├── models/
│   ├── User.js             (Admin user model)
│   ├── Event.js            (Event model)
│   ├── Registration.js     (Registration model)
│   └── Team.js             (Team member model)
│
├── middleware/
│   ├── auth.js             (JWT/Session authentication)
│   ├── validation.js       (Input validation)
│   └── errorHandler.js     (Error handling)
│
├── database/
│   ├── connection.js       (Database connection)
│   └── schema.sql          (Database schema/migrations)
│
└── package.json
```

---

## 2.2 Database Schema

**Users Table (Admin accounts):**

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL (bcrypt hashed),
  email VARCHAR(100),
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Events Table:**

```sql
CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  location VARCHAR(255),
  description TEXT,
  capacity INT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Registrations Table:**

```sql
CREATE TABLE registrations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_id INT NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'confirmed',
  FOREIGN KEY (event_id) REFERENCES events(id)
);
```

**Team Table:**

```sql
CREATE TABLE team_members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  position VARCHAR(100),
  bio TEXT,
  photo_url VARCHAR(255),
  social_links JSON,
  display_order INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 2.3 API Endpoints

### Public Endpoints (No authentication required):

| Method | Endpoint             | Purpose                  |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/events`        | Get all events           |
| GET    | `/api/events/:id`    | Get single event         |
| GET    | `/api/team`          | Get all team members     |
| POST   | `/api/registrations` | Submit registration form |

### Admin Endpoints (Authentication required):

| Method | Endpoint                         | Purpose                |
| ------ | -------------------------------- | ---------------------- |
| POST   | `/api/auth/login`                | Admin login            |
| POST   | `/api/auth/logout`               | Admin logout           |
| GET    | `/api/admin/registrations`       | Get all registrations  |
| GET    | `/api/admin/registrations/count` | Get registration count |
| GET    | `/api/admin/dashboard`           | Admin dashboard data   |

---

## 2.4 Backend Technologies

**Framework:** Node.js + Express.js
**Database:** MySQL (or PostgreSQL)
**Authentication:** JWT tokens + bcrypt password hashing
**Validation:** Express-validator
**CORS:** Enable for frontend domain
**Port:** 5000 (or specified in .env)

---

## 2.5 Key Backend Features

1. **Registration Submission:**

   - Validate form data
   - Store in database
   - Send confirmation email (optional)
   - Return success response

2. **Admin Authentication:**

   - Login with username/password
   - Generate JWT token
   - Set session/cookie
   - Validate token on each request

3. **Data Retrieval:**

   - Get all events with count
   - Get registrations for admin view
   - Get team members
   - Get registration statistics

4. **Error Handling:**
   - Validation errors (400)
   - Authentication errors (401)
   - Server errors (500)
   - Custom error messages

---

# SECTION 3: ADMIN PANEL

## 3.1 Admin Panel Structure

```
admin/
├── index.html              (Admin home/redirect to login)
├── login.html              (Admin login page)
├── dashboard.html          (Admin dashboard)
│
├── css/
│   ├── admin-styles.css    (Admin panel styling)
│   └── admin-theme.css     (Red & Black theme for admin)
│
├── js/
│   ├── admin.js            (Main admin functionality)
│   ├── auth.js             (Login/logout logic)
│   ├── registrations.js    (Load & display registrations)
│   └── api.js              (API calls to backend)
│
└── README.md
```

---

## 3.2 Admin Dashboard Pages

### Login Page (login.html)

**Layout:**

```
┌─────────────────────────────────────┐
│                                     │
│   ADMIN LOGIN                       │
│                                     │
│   Username [____________]           │
│   Password [____________]           │
│                                     │
│   [LOGIN] (Red button)              │
│                                     │
│   Error message (if any - red)      │
│                                     │
└─────────────────────────────────────┘
```

**Features:**

- Centered form
- Black background, red border
- Red login button with glow on hover
- Error messages in red
- Input validation
- Secure password field
- Redirect to dashboard on success
- Redirect to login on failed auth

### Dashboard Page (dashboard.html)

**Layout:**

```
┌─────────────────────────────────────┐
│   ADMIN PANEL       [LOGOUT]        │  (Red header)
├─────────────────────────────────────┤
│                                     │
│   REGISTRATIONS                     │
│   Total: X registrations            │  (Red number)
│                                     │
│   ┌───────────────────────────────┐ │
│   │ Name  | Email | Phone | Event │ │ (Table header - black bg, red text)
│   ├───────────────────────────────┤ │
│   │ John  │ john@ │ 123   │Event1 │ │
│   │ Jane  │ jane@ │ 456   │Event2 │ │
│   │ ...   │ ...   │ ...   │ ...   │ │
│   └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

**Features:**

- Welcome message for logged-in admin
- Logout button (top right, red)
- Registrations table:
  - Column headers: Name, Email, Phone, Event, Date, Status
  - Black rows with white text
  - Alternating row colors (black, dark black)
  - Red text for important data
  - Scrollable if many registrations
- Registration count (prominent, red)
- Responsive table design

### Registrations View

**Features:**

- Display all registrations in table format
- Show registration count
- Show total number of people registered per event
- Data columns:
  - Full Name (white)
  - Email (white)
  - Phone (white)
  - Event (red)
  - Registered Date (white)
  - Status (red)
- Sort by date (newest first)
- Refresh button to reload data
- Auto-refresh every 30 seconds (optional)

---

## 3.3 Admin Panel Styling

**Theme:**

- Background: Black (#000000 or #1A1A1A)
- Text: White (#FFFFFF)
- Accents: Red (#DC143C)
- Borders: Red
- Buttons: Red background, black text

**Table Styling:**

- Header: Black background, red text, bold
- Rows: Alternating black and dark black
- Hover: Red glow/highlight on row
- Text: White/light gray
- Borders: Red

**Buttons:**

- Logout: Red background, black text
- Refresh: Red border, red text, hover glow

---

## 3.4 Admin Authentication

**Login Flow:**

1. Admin enters username & password
2. Submit to `/api/auth/login`
3. Backend validates credentials
4. If valid: Return JWT token
5. Store token in localStorage/sessionStorage
6. Redirect to dashboard
7. Add token to Authorization header for API calls

**Session Management:**

- Token expires after 24 hours
- Token in header: `Authorization: Bearer <token>`
- Check token validity on page load
- Redirect to login if token invalid

---

## 3.5 Real-time Updates (Optional)

- Use WebSockets or polling to check for new registrations
- Update registration count in real-time
- Play notification sound on new registration (optional)
- Timestamp of last update displayed

---

# SECTION 4: COMPLETE FILE STRUCTURE

```
Excel_5.0/
│
├── frontend/
│   ├── index.html
│   ├── about.html
│   ├── events.html
│   ├── team.html
│   ├── register.html
│   │
│   ├── css/
│   │   ├── styles.css
│   │   ├── animations.css
│   │   ├── cards.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── animations.js
│   │   ├── form-validation.js
│   │   ├── api.js
│   │   ├── navbar.js
│   │   └── video-loader.js
│   │
│   ├── videos/
│   │   └── stranger-things-intro.gif
│   │
│   ├── images/
│   │   ├── logo.png
│   │   ├── events/
│   │   ├── team/
│   │   └── assets/
│   │
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── config.js
│   ├── .env
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── events.js
│   │   ├── registrations.js
│   │   └── team.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   ├── registrationController.js
│   │   └── teamController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   ├── Registration.js
│   │   └── Team.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   │
│   ├── database/
│   │   ├── connection.js
│   │   └── schema.sql
│   │
│   ├── package.json
│   └── README.md
│
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   │
│   ├── css/
│   │   ├── admin-styles.css
│   │   └── admin-theme.css
│   │
│   ├── js/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── registrations.js
│   │   └── api.js
│   │
│   └── README.md
│
├── PROJECT_PLAN.md
├── IMPLEMENTATION_GUIDE.md (this file)
├── README.md
└── .gitignore
```

---

# SECTION 5: DEVELOPMENT ROADMAP

## Phase 1: Frontend Setup ✓

- [x] Create HTML structure for all pages
- [x] Set up CSS files with red/black theme
- [x] Create animations CSS file
- [x] Set up responsive design

## Phase 2: Frontend Development

- [ ] Build Homepage with navbar, GIF, hero section
- [ ] Build About page with animations
- [ ] Build Events page with cards & filters
- [ ] Build Team page with card animations
- [ ] Build Registration form with validation
- [ ] Add footer to all pages with Google Map & Contact

## Phase 3: Backend Setup

- [ ] Set up Node.js + Express server
- [ ] Configure database connection (MySQL)
- [ ] Create database schema & tables
- [ ] Set up environment variables

## Phase 4: Backend Development

- [ ] Create API routes (events, registrations, team)
- [ ] Implement authentication (JWT)
- [ ] Create controllers & models
- [ ] Add validation middleware
- [ ] Test all API endpoints

## Phase 5: Frontend-Backend Integration

- [ ] Connect form submission to backend
- [ ] Fetch events from API
- [ ] Fetch team members from API
- [ ] Handle API errors & loading states
- [ ] Display success/error messages

## Phase 6: Admin Panel Development

- [ ] Create login page
- [ ] Implement authentication flow
- [ ] Create dashboard page
- [ ] Display registrations table
- [ ] Implement logout functionality
- [ ] Add real-time updates

## Phase 7: Testing & Optimization

- [ ] Test all pages on mobile/desktop
- [ ] Test form validation
- [ ] Test admin login & dashboard
- [ ] Optimize images & performance
- [ ] Cross-browser testing

## Phase 8: Deployment

- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Deploy backend (Heroku/Railway)
- [ ] Set up database on hosting
- [ ] Configure environment variables
- [ ] Final testing on live site

---

# SECTION 6: THEME GUIDELINES

## Stranger Things Aesthetic

- **Color Palette:** Only Black & Red
- **Font:** Courier New, Courier, or monospace (tech/retro vibe)
- **Shadows:** Red glowing shadows (box-shadow: 0 0 20px rgba(220, 20, 60, 0.5))
- **Borders:** Red (#DC143C) instead of gray
- **Hover Effects:** Red glow, lift effect, scale
- **Loading Animation:** Stranger Things opening intro or similar
- **Overall Feel:** Dark, mysterious, 80s-inspired

## Color Usage

| Element         | Color      | Hex                    |
| --------------- | ---------- | ---------------------- |
| Primary         | Red        | #DC143C                |
| Bright Red      | Red        | #FF0000                |
| Background      | Black      | #000000                |
| Dark Background | Black      | #1A1A1A                |
| Text            | White      | #FFFFFF                |
| Secondary Text  | Light Gray | #CCCCCC                |
| Borders         | Red        | #DC143C                |
| Shadows         | Red        | rgba(220, 20, 60, 0.5) |
| Hover           | Bright Red | #FF0000                |

---

**Next Step:** Start building the frontend with HTML, CSS, and JavaScript!

---

_Document Version: 1.0_
_Last Updated: December 30, 2025_
