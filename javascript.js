  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Stagger children
        e.target.querySelectorAll('.timeline-item, .project-card').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.08}s`;
          el.classList.add('reveal', 'visible');
        });
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ============================================================
     SMOOTH ACTIVE NAV
     ============================================================ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}`
        ? 'var(--accent)' : '';
    });
  });
