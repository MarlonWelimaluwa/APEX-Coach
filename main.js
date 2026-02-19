/* =============================================
   APEX GYM COACH — main.js
   Features: Navbar scroll, Mobile menu,
   FAQ accordion, Scroll reveal, EmailJS contact
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     1. NAVBAR SCROLL
  ===================== */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });


  /* =====================
     2. MOBILE MENU
  ===================== */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on backdrop click
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });


  /* =====================
     3. SCROLL REVEAL
  ===================== */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));


  /* =====================
     4. FAQ ACCORDION
  ===================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(f => f.classList.remove('open'));

      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });


  /* =====================
     5. ACTIVE NAV LINK (scroll spy)
  ===================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--white)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => spyObserver.observe(s));


  /* =====================
     6. EMAILJS CONTACT FORM
  ===================== */

  // ⚠️  IMPORTANT: Replace the values below with your actual EmailJS credentials:
  //   - YOUR_PUBLIC_KEY  → From EmailJS Dashboard → Account → Public Key
  //   - YOUR_SERVICE_ID  → From EmailJS Dashboard → Email Services
  //   - YOUR_TEMPLATE_ID → From EmailJS Dashboard → Email Templates

  const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

  // Init EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const contactForm = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  const formError   = document.getElementById('formError');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Button loading state
    const btnText = submitBtn.querySelector('span');
    const originalText = btnText.textContent;
    btnText.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.75';

    // Hide any previous messages
    if (formError) formError.style.display = 'none';

    // Gather form data
    const formData = {
      from_name:  contactForm.querySelector('[name="from_name"]').value.trim(),
      from_email: contactForm.querySelector('[name="from_email"]').value.trim(),
      phone:      contactForm.querySelector('[name="phone"]').value.trim(),
      goal:       contactForm.querySelector('[name="goal"]').value,
      message:    contactForm.querySelector('[name="message"]').value.trim(),
      reply_to:   contactForm.querySelector('[name="from_email"]').value.trim(),
    };

    try {
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded. Make sure to include the EmailJS script and set your credentials.');
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);

      // Show success
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');

    } catch (err) {
      console.error('EmailJS Error:', err);

      // Show error
      if (formError) {
        formError.style.display = 'block';
        formError.textContent = err.message?.includes('EmailJS not loaded')
          ? '⚠️ EmailJS not configured yet. Please add your EmailJS credentials in main.js.'
          : '❌ Something went wrong. Please try again or contact directly via WhatsApp.';
      }

      // Reset button
      btnText.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  });


  /* =====================
     7. SMOOTH ANCHOR SCROLL
     (with offset for fixed navbar)
  ===================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* =====================
     8. YEAR AUTO-UPDATE
  ===================== */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
