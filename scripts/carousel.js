document.querySelectorAll('.carouselWrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const prev = wrapper.querySelector('.carouselButton.prev');
  const next = wrapper.querySelector('.carouselButton.next');

  const card = carousel.querySelector('.card');
  const gap = parseFloat(getComputedStyle(carousel).gap) || 16;
  const scrollAmount = (card.offsetWidth + gap) *3;

  next.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  prev.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
});