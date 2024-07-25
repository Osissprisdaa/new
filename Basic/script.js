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
