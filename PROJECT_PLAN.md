# Excel 5.0 Website - Project Plan

## Project Overview

A professional website for Excel 5.0 with event management, team showcase, and user registration capabilities with an admin dashboard.

---

## 1. Website Structure & Pages

### 1.1 Landing Page (Index/Home)

**Features:**

- Video loading animation (splash screen with fade-in/fade-out)
- Navigation menu with links to all pages (hover animation on links)
- Hero section with welcome message (slide-in animation)
- Main action buttons with hover effects:
  - "Explore Events" (links to Events page - pulse animation on hover)
  - "Register Now" (links to Registration page - pulse animation on hover)
- Event highlights section with fade-in animation on scroll
- **Footer Section:**
  - Google Map integration (location display)
  - Contact Details (email, phone, address)
  - "Developed by" credit
  - Copyright information
  - Social media links with hover animation (optional)

### 1.2 About Page

**Features:**

- Company/organization description
- Mission and vision
- History/Background
- Key achievements
- Why choose Excel 5.0

### 1.3 Events Page

**Features:**

- Display all events with fade-in animation
- Show total number of events
- Event cards with smooth hover transitions:
  - Lift effect on hover (scale + shadow)
  - Event name
  - Date & time
  - Location
  - Brief description
  - "Learn More" / "Register" buttons with red background & black text
- Filter options (by date, category, etc.) with smooth transitions
- Event details view (individual event page)

### 1.4 Team Page

**Features:**

- Team member cards with smooth transitions & animations:
  - Photo with zoom effect on hover
  - Name
  - Position/Role
  - Bio/Description
  - Contact/Social links with icon animations
- Cards have red border/shadow with black background
- Flip or slide-up animation on hover
- Organized by departments/roles

### 1.5 Registration Page

**Features:**

- Registration form with animation on load (slide-in from bottom)
- Form fields with:
  - Full Name (input animation on focus)
  - Email (input animation on focus)
  - Phone Number (input animation on focus)
  - Event Selection (dropdown with red/black theme)
  - Message/Comments (optional - expanding text area)
  - Terms & Conditions checkbox
- Form inputs have red border on focus with smooth transition
- Form validation (client-side & server-side) with error animations
- Success message after submission (fade-in animation)
- Submit button with red background and hover animation
- Form data submission to backend

### 1.6 Admin Panel (Separate Section)

**Features:**

- Admin login page (authentication)
- Dashboard with overview
- **Registrations View:**
  - View all registrations/who registered
  - See registration count
  - View registration details (Name, Email, Phone, Event, Date)

---

## 2. Technical Architecture

### 2.1 Frontend Stack

- **HTML5** - Structure
- **CSS3** - Styling with animations (Tailwind CSS or custom CSS for red/black theme)
- **JavaScript** - Interactivity and animation triggers
- **AOS (Animate On Scroll)** - Scroll-based animations
- **Video.js or similar** - Video loading animation
- **CSS Animations** - Transitions, keyframe animations, hover effects

### 2.2 Backend Stack (Recommended)

- **Node.js + Express** OR **Python + Flask/Django** OR **PHP**
- **Database:** MySQL/PostgreSQL/MongoDB
- **Authentication:** JWT or Session-based

### 2.3 APIs Required

- Registration form submission endpoint
- Event data retrieval
- Admin authentication
- CRUD operations for events, team, registrations

---

## 3. Database Schema

### Tables/Collections:

1. **Users** (for admin accounts)

   - id, username, password (hashed), email, role, created_at

2. **Events**

   - id, name, date, time, location, description, capacity, registered_count, image, created_at

3. **Registrations**

   - id, event_id, full_name, email, phone, message, registered_at, status

4. **Team**

   - id, name, position, bio, photo_url, order, created_at

5. **Site_Settings** (for contact details, copyright, etc.)
   - id, key, value

---

## 4. File Structure

```
Excel_5.0/
├── index.html                 (Home/Landing page)
├── about.html                 (About page)
├── events.html                (Events listing)
├── event-detail.html          (Single event view)
├── team.html                  (Team page)
├── register.html              (Registration form)
├── admin/
│   ├── login.html             (Admin login)
│   ├── dashboard.html         (Admin dashboard)
│   ├── registrations.html     (Manage registrations)
│   ├── events-admin.html      (Manage events)
│   ├── team-admin.html        (Manage team)
│   ├── settings.html          (Site settings)
│   └── js/
│       └── admin.js           (Admin functionality)
├── css/
│   ├── style.css              (Main styles)
│   └── admin-style.css        (Admin panel styles)
├── js/
│   ├── main.js                (Main functionality)
│   ├── video-loader.js        (Video loading animation)
│   ├── form-validation.js     (Form validation)
│   └── api.js                 (API calls)
├── videos/
│   └── loading-video.mp4      (Loading animation video)
├── images/
│   ├── team/                  (Team photos)
│   ├── events/                (Event images)
│   └── logo.png
├── backend/
│   ├── server.js              (Express server)
│   ├── routes/
│   │   ├── auth.js            (Authentication routes)
│   │   ├── events.js          (Event routes)
│   │   ├── registrations.js   (Registration routes)
│   │   └── team.js            (Team routes)
│   ├── models/                (Database models)
│   ├── middleware/            (Auth, validation middleware)
│   ├── config.js              (Database config)
│   └── .env                   (Environment variables)
└── README.md                  (Project documentation)
```

---

## 5. Design Theme & Animations

### 5.1 Color Scheme

- **Primary:** Red (#DC143C or #FF3333)
- **Secondary:** Black (#000000 or #1A1A1A)
- **Accents:** White (#FFFFFF) for text on dark backgrounds
- **Background:** Black or very dark gray with red accents

### 5.2 Global Animations

- Page load fade-in animation (0.6s)
- Smooth scroll behavior throughout site
- Button hover effects (scale 1.05 + shadow glow)
- Link hover animations (color change to red)
- Smooth transitions on all interactive elements (0.3s)
- Loading spinner with red/black colors

### 5.3 Card Animations

- Card hover: Lift effect (translateY -10px) + shadow glow
- Card entrance: Fade-in + slide-up animation
- Card border glow on hover (red shadow)
- Image zoom effect on hover (scale 1.1)

### 5.4 Video Loading Animation

- Play on page load
- Automatic fade-out after completion (smooth fade 1s)
- Skip button with red background
- Smooth transition to homepage content with fade-in

### 5.5 Navigation Menu

- Sticky/fixed header with black background & red accents
- Logo with subtle animation on hover
- Links: Home, About, Events, Team, Register, Admin Login
- Link hover animations (underline slide from left, text color change to red)
- Responsive hamburger menu for mobile with animation
- Active page highlighting with red indicator

### 5.6 Registration Form Flow

1. User fills form on `/register.html`
2. Client-side validation
3. Form submission to `/api/registrations` endpoint
4. Server-side validation
5. Data stored in database
6. Automatic update on admin panel

### 5.7 Admin Panel Flow

1. Admin logs in with credentials
2. Session/JWT token stored
3. Access to registration view section
4. Real-time updates on new submissions
5. Logout functionality

---

## 6. Key Functionalities Summary

| Feature                 | Location                  | Type                |
| ----------------------- | ------------------------- | ------------------- |
| Video Loading           | Homepage                  | Frontend            |
| Navigation              | All pages                 | Frontend            |
| Event Display           | /events.html              | Frontend + Backend  |
| Event Count             | Events page               | Backend calculation |
| Team Display            | /team.html                | Backend data        |
| Registration Form       | /register.html            | Frontend + Backend  |
| Form Validation         | /register.html            | Frontend + Backend  |
| Admin Login             | /admin/login.html         | Backend + Session   |
| Registration Management | /admin/registrations.html | Backend + Frontend  |
| Event Management        | /admin/events-admin.html  | Backend + Frontend  |
| Team Management         | /admin/team-admin.html    | Backend + Frontend  |
| Google Map              | Homepage footer           | Frontend (Embedded) |
| Contact Details         | Homepage footer           | Backend + Frontend  |

---

## 7. Development Phases

### Phase 1: Planning & Setup ✓

- Finalize requirements
- Set up project structure
- Configure development environment

### Phase 2: Frontend Development

- Create HTML pages
- Design CSS styling
- Implement video loading animation
- Build responsive navigation

### Phase 3: Backend Development

- Set up server and database
- Create API endpoints
- Implement authentication
- Build data models

### Phase 4: Integration

- Connect frontend to backend
- Test API endpoints
- Implement form submission
- Test registration flow

### Phase 5: Admin Panel Development

- Build admin dashboard
- Create CRUD interfaces
- Implement admin authentication
- Add data management features

### Phase 6: Testing & Deployment

- Unit testing
- Integration testing
- Performance testing
- Deploy to hosting

---

## 8. Technology Stack Recommendations

### Frontend

- HTML5, CSS3, JavaScript
- Bootstrap 5 or Tailwind CSS (responsive design)
- Video.js (for video handling)
- Fetch API or Axios (HTTP requests)

### Backend

- **Option A:** Node.js + Express.js
- **Option B:** Python + Flask
- **Option C:** PHP + Laravel
- **Option D:** ASP.NET Core

### Database

- MySQL / PostgreSQL (relational)
- MongoDB (NoSQL option)

### Hosting

- Vercel / Netlify (Frontend)
- Heroku / Railway / DigitalOcean (Backend)
- Or combined hosting like AWS, Google Cloud

---

## 9. Security Considerations

- Password hashing (bcrypt)
- CSRF protection
- SQL injection prevention (parameterized queries)
- Input validation on both frontend and backend
- HTTPS for all communications
- Admin session management
- Rate limiting on forms

---

## 10. Next Steps

1. **Choose tech stack** - Decide on backend framework and database
2. **Set up repository** - Initialize Git repo
3. **Create mock data** - Prepare sample events, team, contact info
4. **Design UI mockups** - Create wireframes/prototypes
5. **Start Phase 2** - Begin frontend development

---

**Status:** Planning Complete ✓
**Ready for Development:** Yes
