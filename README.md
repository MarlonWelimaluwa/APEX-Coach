# APEX Gym Coach — Landing Page

A fully mobile-responsive, modern landing page for a solo gym coach.
**Theme:** Deep Red + Charcoal | **Stack:** HTML, CSS (custom), Tailwind-ready, Vanilla JS + EmailJS

---

## 📁 File Structure

```
gym-coach/
├── index.html          ← Main landing page (all sections)
├── css/
│   └── style.css       ← All styles, animations, responsive layout
├── js/
│   └── main.js         ← Navbar, mobile menu, FAQ, scroll reveal, EmailJS
├── images/             ← (Create this folder — add your photos here)
│   ├── coach-hero.jpg
│   ├── coach-about.jpg
│   ├── transform-1-before.jpg
│   ├── transform-1-after.jpg
│   └── ...
└── README.md           ← This file
```

---

## ⚡ Quick Start

1. **Open `index.html`** in a browser — it works without any server.
2. **Add your images** — see the Image Setup section below.
3. **Connect EmailJS** — see the EmailJS Setup section below.
4. **Customise content** — names, prices, descriptions are all clearly labelled in `index.html`.

---

## 📧 EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) — **free up to 200 emails/month, no backend needed.**

### Step 1 — Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free)
2. Go to **Email Services** → Add New Service → Connect your Gmail or any email

### Step 2 — Create an Email Template
1. Go to **Email Templates** → Create New Template
2. Use these template variables (they match the form fields):

```
From: {{from_name}} <{{from_email}}>
Subject: New Coaching Enquiry from {{from_name}}

Name:    {{from_name}}
Email:   {{from_email}}
Phone:   {{phone}}
Goal:    {{goal}}
Message: {{message}}
```

### Step 3 — Get Your Credentials
From your EmailJS dashboard, collect:
- **Public Key** → Account → General → Public Key
- **Service ID** → Email Services → your service ID
- **Template ID** → Email Templates → your template ID

### Step 4 — Add Credentials to main.js
Open `js/main.js` and replace these 3 lines near the top of section 6:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← Replace
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← Replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← Replace
```

That's it — the form will now send emails directly to your inbox! ✅

---

## 🖼 Image Setup

The site uses placeholder boxes wherever images are expected.
To replace them, open `index.html` and search for the comments like:

```html
<!-- Replace with: <img src="images/coach-hero.jpg" alt="Coach Name" ...> -->
```

Simply swap the placeholder `<div>` with the `<img>` tag shown in the comment.

### Recommended image sizes:
| Image | Size | Aspect Ratio |
|-------|------|-------------|
| Hero coach photo | 600×800px | 3:4 |
| About coach photo | 600×750px | 4:5 |
| Transformation before/after | 400×533px each | 3:4 |

### Image optimisation tips:
- Use `.webp` format for best performance
- Compress with [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Target < 150KB per image for fast loading

---

## ✏️ Content Customisation

All editable content is in `index.html`. Key items to update:

| Item | Where |
|------|-------|
| Coach name | Hero title, About section → "Marcus Reid" |
| Stats (200+ clients, 8+ years) | Hero stats section |
| Services & descriptions | Services section — 3 cards |
| Pricing amounts | Pricing section — 3 cards |
| Testimonials | Testimonials section — 3 cards |
| Contact details (email, phone, location) | Contact section |
| Social media links | Contact section + Footer |
| FAQ answers | FAQ section |
| Footer tagline | Footer section |

---

## 🎨 Colour Customisation

All colours are CSS variables in `css/style.css` at the top:

```css
:root {
  --red:        #C0152A;   /* Main brand red */
  --red-dark:   #8B0F1E;   /* Darker red for borders/backgrounds */
  --red-light:  #E8192F;   /* Lighter red for highlights */
  --charcoal:   #1C1C1E;   /* Section backgrounds */
  --black:      #0D0D0F;   /* Main background */
  /* ... */
}
```

Change `--red`, `--red-dark`, `--red-light` to switch the entire colour theme.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| ≥ 1024px (Desktop) | Full 2–3 column grids |
| 768px–1023px (Tablet) | 2-column grids |
| ≤ 768px (Mobile) | Single column, hamburger menu |
| ≤ 480px (Small Mobile) | Full-width buttons, stacked stats |

---

## 🚀 Deployment

### Option A — Static Hosting (Free)
- **Vercel:** Drag & drop the folder at [vercel.com](https://vercel.com)
- **Netlify:** Drag & drop at [netlify.com](https://netlify.com)
- **GitHub Pages:** Push to GitHub and enable Pages

### Option B — Upgrade to Next.js
Since you use Next.js, you can:
1. Move `index.html` content into `app/page.tsx`
2. Move `style.css` to `app/globals.css` or use Tailwind utilities
3. Move `main.js` logic into client components
4. Connect your Supabase backend for lead storage

---

## ✅ Pre-Launch Checklist

- [ ] Added coach photos to `/images/`
- [ ] Updated coach name, bio, stats
- [ ] Updated contact email, phone, location
- [ ] Set up EmailJS and added credentials to `main.js`
- [ ] Updated social media links
- [ ] Updated pricing to real amounts
- [ ] Updated testimonials with real client reviews
- [ ] Added real transformation photos
- [ ] Tested on mobile (iPhone & Android)
- [ ] Tested contact form end-to-end

---

Built for speed, conversion, and zero lag. 🔥
