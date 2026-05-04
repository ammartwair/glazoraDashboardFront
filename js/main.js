// ============================================
// GLAZORA – main.js (Nav, Animations, Scroll)
// ============================================
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky nav ─────────────────────────────
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── Mobile hamburger ────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ── Fade-in on scroll ───────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => obs.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ── Contact form ─────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      setLoading(btn, true);

      const data = {
        first_name:   contactForm.querySelector('[name="first_name"]')?.value.trim(),
        last_name:    contactForm.querySelector('[name="last_name"]')?.value.trim(),
        phone:        contactForm.querySelector('[name="phone"]')?.value.trim(),
        email:        contactForm.querySelector('[name="email"]')?.value.trim(),
        project_type: contactForm.querySelector('[name="project_type"]')?.value,
        emirate:      contactForm.querySelector('[name="emirate"]')?.value,
        message:      contactForm.querySelector('[name="message"]')?.value.trim(),
      };

      try {
        const res = await ContactAPI.submit(data);
        setLoading(btn, false);
        if (res.ok) {
          const successEl = document.getElementById('formSuccess');
          if (successEl) successEl.style.display = 'block';
          contactForm.reset();
          successEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          showToast(res.data.message || 'Failed to send message', 'error');
        }
      } catch {
        setLoading(btn, false);
        showToast('Network error. Please try again.', 'error');
      }
    });
  }

  // ── Populate form select options ─────────────
  function populateSelects() {
    const projSelect = document.querySelector('select[name="project_type"]');
    const emirateSelect = document.querySelector('select[name="emirate"]');
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
    const trans = typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS[lang] : null;

    if (projSelect && trans) {
      projSelect.innerHTML = `<option value="">— ${trans.proj_type_ph || 'اختر'} —</option>`;
      (trans.proj_options || []).forEach(opt => {
        const o = document.createElement('option');
        o.value = opt; o.textContent = opt;
        projSelect.appendChild(o);
      });
    }
    if (emirateSelect && trans) {
      emirateSelect.innerHTML = `<option value="">— ${trans.emirate_ph || 'اختر'} —</option>`;
      (trans.emirate_options || []).forEach(opt => {
        const o = document.createElement('option');
        o.value = opt; o.textContent = opt;
        emirateSelect.appendChild(o);
      });
    }
  }

  // Populate after i18n loads
  setTimeout(populateSelects, 100);
  document.addEventListener('lang-changed', populateSelects);

  // ── Filter tabs (products page) ──────────────
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        const cats = card.dataset.categories || '';
        card.style.display = (filter === 'all' || cats.includes(filter)) ? 'block' : 'none';
      });
    });
  });

  // ── Smooth anchor links ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
