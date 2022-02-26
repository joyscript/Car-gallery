const container = document.querySelector('.container');

const changeActiveSlide = () => {
  const activeSlide = container.querySelector('.slide.active');
  activeSlide.classList.remove('active');
};

container.addEventListener('click', (e) => {
  if (e.target.closest('.slide')) {
    changeActiveSlide();
    const clickedSlide = e.target.closest('.slide');
    clickedSlide.classList.add('active');
  }
});
