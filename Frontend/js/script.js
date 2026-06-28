document.addEventListener('DOMContentLoaded', () => {
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
