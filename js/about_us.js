// Toggle menu visibility on smaller screens with transition effect
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('input[type="checkbox"]');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggles the active class to show/hide menu
    });
});s