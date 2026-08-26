document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) closeMenu();
    });
  }

  const headings = document.querySelectorAll('.about-heading');

  headings.forEach(heading => {
    const text = heading.textContent;
    heading.textContent = ''; // Clear original text

    for (let char of text) {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'interactive-char';
      if (char === ' ') {
        span.style.whiteSpace = 'pre'; // Preserve spaces
      }
      heading.appendChild(span);
    }
  });
});
