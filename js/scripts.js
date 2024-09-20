// Function to hide the preloader and show the main content after 5 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('main-content').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        }, 500); // Match with the transition time in CSS
    }, 4300); // Adjust time as needed
});