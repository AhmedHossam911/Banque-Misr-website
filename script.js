
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide(index) {

    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slider.children.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(slideIndex);
}


const interval = setInterval(nextSlide, 5000);


nextBtn.addEventListener('click', () => {
    clearInterval(interval); 
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    clearInterval(interval); 
    prevSlide();
});

