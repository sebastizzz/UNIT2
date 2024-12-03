let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let slideshowInterval;
let isRunning = false;

// Funcția pentru a schimba slide-urile
function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Controlul Start/Stop pentru slideshow
document.getElementById('toggle-slideshow').addEventListener('click', () => {
    const button = document.getElementById('toggle-slideshow');
    if (!isRunning) {
        // Pornește slideshow-ul
        slideshowInterval = setInterval(changeSlide, 3000);
        button.textContent = 'Stop';
        isRunning = true;
    } else {
        // Oprește slideshow-ul
        clearInterval(slideshowInterval);
        button.textContent = 'Start';
        isRunning = false;
    }
});