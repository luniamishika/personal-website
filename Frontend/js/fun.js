(function () {
  const potteryGallery = document.getElementById('potteryGallery');
  const potteryImages = [
    '/fun/pottery/WhatsApp Image 2026-01-12 at 12.43.28 AM (1).jpeg',
    '/fun/pottery/WhatsApp Image 2026-01-18 at 8.56.13 PM.jpeg',
    '/fun/pottery/WhatsApp Image 2026-04-08 at 10.34.51 PM.jpeg'
  ];

  potteryImages.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Pottery piece';
    img.loading = 'lazy';
    potteryGallery.appendChild(img);
  });

  const designGallery = document.getElementById('designGallery');
  const designImages = [];

  if (designImages.length > 0) {
    designImages.forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = 'Design piece';
      img.loading = 'lazy';
      designGallery.appendChild(img);
    });
  }

  const readingList = document.getElementById('readingList');
  const bookImages = [
    '/fun/books/butter-21-2482074963.jpg',
    '/fun/books/81PX0uhxQ3L-1542153354.jpg',
    '/fun/books/91zImnC+uLL-600845415.jpg',
    '/fun/books/the-stranger-taschenbuch-albert-camus-englisch-4147876500.jpeg'
  ];

  bookImages.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Book cover';
    img.className = 'book-cover';
    img.loading = 'lazy';
    readingList.appendChild(img);
  });
})();
