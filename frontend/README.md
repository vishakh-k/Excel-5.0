# Excel 5.0 Frontend - Complete Code

## Overview

This is the frontend implementation of the Excel 5.0 event management website with a Stranger Things theme using Black & Red color scheme.

## Files Created

### HTML Pages

- **index.html** - Homepage with navigation, loading video overlay, hero section, and featured events
- **about.html** - About page with company information, mission, vision, and achievements
- **events.html** - Events listing page with event count, filters, and event cards
- **team.html** - Team member showcase with cards and social links
- **brochure.html** - Brochure page with overview of services and offerings
- **register.html** - Registration form with validation and FAQ section

### CSS Files

- **css/styles.css** - Main stylesheet with theme colors, layout, and component styling
- **css/animations.css** - All animations, keyframes, and animation utilities

### JavaScript Files

- **js/main.js** - Main JavaScript for navigation, smooth scrolling, and functionality
- **js/video-loader.js** - Loading video overlay control (auto-hide after 5 seconds)
- **js/form-validation.js** - Registration form validation and submission

### Image Folders

- **images/** - Directory for images (events, team photos, assets, logo)

## Theme Details

### Colors

- Primary Red: #DC143C
- Bright Red: #FF0000
- Primary Black: #000000
- Dark Black: #1A1A1A
- Light Gray: #CCCCCC
- White: #FFFFFF

### Font

- Primary: Courier New (monospace) - Stranger Things style

### Navigation Bar

- Sticky/fixed position
- Black background, red text
- Menu items: Home, About, Events, Team, Brochure
- Two prominent buttons: Brochure & Register Now
- Hamburger menu for mobile devices

## Key Features

### Loading Video

- Plays automatically on page load
- Full-screen overlay with centered GIF
- Auto-fades after 5 seconds
- Skip button available
- Located in `images/stranger-things.gif`

### Animations

- Hero section slide-in animation
- Card fade-in and lift effects on hover
- Link underline slide animation
- Form slide-in from bottom
- Smooth transitions (0.3s)
- Red glow shadows on hover

### Responsive Design

- Mobile-first approach
- Hamburger menu on smaller screens
- Grid layouts adapt to screen size
- Optimized for 480px, 768px, and desktop screens

### Forms

- Email validation
- Required field validation
- Focus animations with red glow
- Error messages in red
- Success message display
- Smooth form interactions

## How to Use

### 1. Replace Placeholder Images

Replace these with actual images:

- `images/event1.jpg`, `event2.jpg`, `event3.jpg`, etc. - Event images
- `images/team1.jpg`, `team2.jpg`, etc. - Team member photos
- `images/logo.png` - Company logo
- `images/stranger-things.gif` - Loading video (GIF format)

### 2. Update Contact Information

Edit the footer in all HTML files:

- Email: `info@excel5.com`
- Phone: `+1 (234) 567-890`
- Address: `123 Tech Street, Innovation City, IC 12345`

### 3. Add Google Map

In the footer section of each page, embed a Google Map iframe:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="200"
  style="border:2px solid #DC143C; border-radius: 8px;"
  allowfullscreen=""
  loading="lazy"
>
</iframe>
```

### 4. Connect to Backend

Update API calls in `js/form-validation.js`:

```javascript
// Replace with actual API endpoint
fetch("http://your-backend.com/api/registrations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

## Customization

### Colors

Edit `:root` variables in `css/styles.css`:

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

### Font

Change in `body` selector:

```css
font-family: "Your Font", fallback;
```

### Animation Duration

Edit duration in `css/animations.css`:

```css
animation: fadeOut 1s ease-out 4s forwards;
/* Change 4s to different value */
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images to reduce file size
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Caching**: Enable browser caching in production
4. **Minify CSS/JS**: Minify files for production
5. **CDN**: Use CDN for static assets

## Mobile Optimization

- All pages are fully responsive
- Touch-friendly buttons and links
- Mobile menu with hamburger icon
- Optimized images for mobile
- Viewport meta tag included

## Next Steps

1. Add actual event and team images
2. Connect to backend API
3. Set up email notifications
4. Implement Google Map
5. Add social media integration
6. Deploy to hosting (Vercel, Netlify, etc.)

## Support

For updates or questions, contact: info@excel5.com

---

**Created:** December 30, 2025
**Version:** 1.0
**Theme:** Stranger Things | Black & Red Color Scheme
