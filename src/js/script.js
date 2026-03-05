// Atualizar ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Carrossel do consultório
let slideIndex = 0;

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Auto-play do carrossel (opcional)
setInterval(() => {
    moveSlide(1);
}, 5000);
