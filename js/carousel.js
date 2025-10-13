const swipeItems = document.querySelector('.swipe-items');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.trending-product-card').length;
const visibleCards = 7;

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = document.querySelector('.trending-product-card').offsetWidth + 10; // include margin
  swipeItems.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}