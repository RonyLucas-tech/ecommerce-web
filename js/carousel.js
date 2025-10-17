document.addEventListener("DOMContentLoaded", () => {

  // Select every carousel wrapper (blog, trending, etc.)
  const carousels = document.querySelectorAll(".carousel-wrapper");

  carousels.forEach(carousel => {
    const swipeWrapper = carousel.querySelector(".swipe-wrapper");
    const swipeItems = carousel.querySelector(".swipe-items");
    const prevBtn = carousel.querySelector("#prevBtn");
    const nextBtn = carousel.querySelector("#nextBtn");

    // Select cards dynamically (works for both blog and trending)
    const cards = carousel.querySelectorAll(".blog-product-card, .trending-product-card, .recommend-product-card, .showcase-cards");
    if (cards.length === 0) return; // skip if no cards found

    let currentIndex = 0;
    const visibleCards = 7; // adjust based on your design
    const totalCards = cards.length;

    // Function to update carousel position
    function updateCarousel() {
      const cardWidth = cards[0].getBoundingClientRect().width + 10; // 10 = gap/margin
      swipeItems.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      swipeItems.style.transition = "transform 0.4s ease";
    }

    // Next button
    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateCarousel();
      }
    });

    // Prev button
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  });
});

function getVisibleCards() {
  if (window.innerWidth <= 600) return 2;
  if (window.innerWidth <= 1024) return 3;
  return 4;
}




document.querySelectorAll('.featured-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.featured-carousel');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');
  const cards = wrapper.querySelectorAll('.featured-card');

  let index = 0;

  const updateCarousel = () => {
    const cardWidth = cards[0].offsetWidth + 20; // card + gap
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
  };

  nextBtn.addEventListener('click', () => {
    if (index < cards.length - 1) {  // one card scroll at a time
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
});
