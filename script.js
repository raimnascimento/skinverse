document.addEventListener('DOMContentLoaded', () => {
    const carouselSlides = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        const offset = -currentSlide * 100;
        carouselSlides.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0; 
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1; 
        }
        updateCarousel();
    });

    setInterval(() => {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateCarousel();
    }, 5000); 
});