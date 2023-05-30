const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function moveSlides() {
  sliderWrapper.style.transform = `translateX(-${slideIndex * 25}%)`;
}

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = 3;
  }
  moveSlides();
});

nextBtn.addEventListener('click', () => {
  if (slideIndex < 3) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  moveSlides();
});


console.log(22)