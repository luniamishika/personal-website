(function () {
  const potteryGallery = document.getElementById('potteryGallery');
  const potteryImages = [
    '../fun/pottery/IMG_7140.png'
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
    '../fun/books/81PX0uhxQ3L-1542153354.jpg',
    '../fun/books/91zImnC+uLL-600845415.jpg'
  ];

  bookImages.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Book cover';
    img.className = 'book-cover';
    img.loading = 'lazy';
    readingList.appendChild(img);
  });

  const activityGallery = document.getElementById('activityGallery');
  const activityImages = [
    '../fun/working out/trek-valley.png',
    '../fun/working out/langur.png',
    '../fun/working out/IMG_5513.png',
    '../fun/working out/WhatsApp Image 2026-03-01 at 2.31.14 AM.jpeg'
  ];

  activityImages.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = encodeURI(imgSrc);
    img.alt = 'Being active';
    img.loading = 'lazy';

    if (index === 0) {
      img.classList.add('activity-image--contrast');
    }

    if (index === activityImages.length - 1) {
      img.classList.add('activity-image--vivid');
    }

    if (index === 1) {
      const crop = document.createElement('div');
      crop.className = 'activity-crop';
      crop.appendChild(img);
      activityGallery.appendChild(crop);
    } else {
      activityGallery.appendChild(img);
    }
  });
})();
