const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)'; // Perbesar gambar saat dihover
    image.style.zIndex = 1; // Tempatkan gambar di atas yang lain
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)'; // Kembalikan ukuran asli saat kursor keluar
    image.style.zIndex = 0;
  });
});
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
      document.body.appendChild(lightbox);
      
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
    });
  });
  