// Initialize the slides and dots variables
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Add event listener to change slide images
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Add event listener to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Initialize the first slide
showSlide(currentSlide);

// Set interval to change slides every 5 seconds
setInterval(nextSlide, 5000);