// script.js
document.addEventListener("DOMContentLoaded", function() {
    const slideDownElements = document.querySelectorAll(".slide-down");
    
    slideDownElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });

    const menuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.nav ul');

    menuToggle.addEventListener('click', function() {
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });
});
const gallery = document.querySelector('.gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
  gallery.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  showImage(currentIndex > 0 ? currentIndex - 1 : 0);
});

nextButton.addEventListener('click', () => {
  showImage(currentIndex < gallery.children.length - 1 ? currentIndex + 1 : currentIndex);
});

// Tampilkan gambar pertama saat halaman dimuat
showImage(currentIndex);
