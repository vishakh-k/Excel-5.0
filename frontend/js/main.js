/* =====================================================
   MAIN JAVASCRIPT
   ===================================================== */

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
    if (hamburger) {
      hamburger.classList.remove("active");
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideNav = navMenu && navMenu.contains(event.target);
  const isClickOnHamburger = hamburger && hamburger.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger && navMenu) {
    navMenu.classList.remove("active");
    if (hamburger) {
      hamburger.classList.remove("active");
    }
  }
});

// Scroll Animation - Add animation class when element enters viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
document
  .querySelectorAll(".featured-events, .page-content, .section-title")
  .forEach((el) => {
    observer.observe(el);
  });

// Highlight active navigation link
function highlightActiveNav() {
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll(".nav-menu a");

  menuItems.forEach((item) => {
    item.classList.remove("active");
    if (
      item.getAttribute("href") === currentLocation ||
      item.getAttribute("href") === currentLocation + "index.html"
    ) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("load", highlightActiveNav);

// Add active class styling (ensure it's in CSS)
const style = document.createElement("style");
style.textContent = `
  .nav-menu a.active {
    color: #DC143C;
    text-shadow: 0 0 10px rgba(220, 20, 60, 0.6);
  }
  
  .nav-menu a.active::after {
    width: 100%;
  }

  /* Blinking Cursor for Typewriter */
  @keyframes blinkCursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);

// Console message
console.log(
  "%c✓ Excel 5.0 Website Loaded",
  "color: #DC143C; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(220, 20, 60, 0.6);"
);
console.log(
  "%cStanger Things Theme | Black & Red",
  "color: #DC143C; font-size: 12px;"
);

/* ===========================
   TYPEWRITER ANIMATION
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const text = "INNOVATE. COMPETE. DOMINATE.";
    tagline.textContent = ''; // Clear text
    tagline.style.animation = 'none'; // Disable CSS slide-in
    tagline.style.opacity = '1'; // Ensure visibility

    // Create cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.color = '#DC143C';
    cursor.style.webkitTextStroke = '0px'; // Override parent style
    cursor.style.animation = 'blinkCursor 0.8s infinite';
    cursor.style.marginLeft = '5px';
    tagline.appendChild(cursor);

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        // Insert text before cursor
        const char = document.createTextNode(text.charAt(i));
        tagline.insertBefore(char, cursor);
        i++;
        setTimeout(typeWriter, 150); // Typing speed
      }
    }

    // Start when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(tagline);
  }
});
