(function () {
  const logosSection = document.getElementById('companyLogos');
  const companyLogos = [
    { src: '/logos/iit-rourkee-logo-16x9-3328220051.png', alt: 'IIT Roorkee' },
    { src: 'https://kcdha.ashoka.edu.in/src/images/news-default.png', alt: 'Koita Centre for Digital Health at Ashoka' }
  ];

  companyLogos.forEach(({ src, alt }) => {
    const logoItem = document.createElement('div');
    logoItem.className = 'logo-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'company-logo';
    logoItem.appendChild(img);
    logosSection.appendChild(logoItem);
  });
})();
