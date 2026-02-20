# APEX Coach — Personal Gym Coaching Landing Page

A clean, fully responsive personal gym coaching landing page built with pure HTML, CSS, and JavaScript. Designed to convert visitors into clients with a bold dark aesthetic, smooth animations, and a fully functional contact form.

---

## 🔥 Live Demo

https://apexcoach.vercel.app/

---


## ✨ Features

- **Fully Responsive** — works seamlessly on mobile, tablet, and desktop
- **Mobile Hamburger Menu** — smooth full-screen mobile navigation
- **Scroll Reveal Animations** — elements animate in as you scroll
- **Scroll Spy** — active nav link updates based on section in view
- **FAQ Accordion** — clean expandable FAQ section
- **EmailJS Contact Form** — real email delivery without a backend
- **Success / Error States** — form feedback with auto-reset after submission
- **Smooth Anchor Scrolling** — with fixed navbar offset
- **Auto Year Update** — footer year updates automatically

---

## 📄 Sections

1. **Hero** — Bold headline, CTA buttons, client rating badge
2. **About** — Coach background, experience badge, certifications
3. **Services** — Coaching packages overview
4. **Transformations** — Client before/after results
5. **Testimonials** — Client reviews
6. **Pricing** — Tiered pricing cards with a featured plan
7. **FAQ** — Common questions accordion
8. **Contact** — EmailJS powered enquiry form
9. **Footer** — Links, socials, copyright

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Interactions, scroll effects, form handling |
| [EmailJS](https://emailjs.com) | Contact form email delivery |
| Google Fonts | Bebas Neue, Syne, DM Sans |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/apex-coach.git
cd apex-coach
```

### 2. Open the project

Just open `index.html` in your browser. No build tools or dependencies needed.

```bash
open index.html
```

---

## 📧 EmailJS Setup

This project uses [EmailJS](https://emailjs.com) to send contact form submissions directly to your email — no backend required.

### Steps:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Go to **Email Services** → Add your Gmail or preferred email provider
3. Go to **Email Templates** → Create a template using these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{phone}}` — sender's phone number
   - `{{goal}}` — sender's fitness goal
   - `{{message}}` — sender's message
4. Go to **Account** → copy your **Public Key**
5. Open `main.js` and update these three lines:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

> ⚠️ Make sure all three values are wrapped in quotes.

---

## 📁 Project Structure

```
apex-coach/
├── index.html       # Main HTML file
├── style.css        # All styles and responsive design
├── main.js          # All JavaScript functionality
└── README.md        # Project documentation
```

---

## 🙌 Credits

Designed & developed by Marlon.
