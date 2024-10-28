document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.map-image');
  const stickyContainer = document.querySelector('.sticky-container');
  const yearDisplay = document.querySelector('.year-display');
  const years = [2017, 2019, 2021, 2023]; // Массив с годами
  const imageCount = images.length;

  const totalScrollHeight = stickyContainer.offsetHeight - window.innerHeight;

  function checkScroll() {
    const containerTop = stickyContainer.getBoundingClientRect().top;

    const scrollFraction = Math.abs(containerTop) / totalScrollHeight;
    const activeIndex = Math.min(
      Math.floor(scrollFraction * imageCount),
      imageCount - 1
    );

    // Обновляем отображение года и изображений
    images.forEach((img, index) => {
      img.classList.toggle('active', index === activeIndex);
    });
    yearDisplay.textContent = years[activeIndex];

    requestAnimationFrame(checkScroll);
  }

  requestAnimationFrame(checkScroll);
});

const burgerButton = document.getElementById('burgerButton');
  const mobileMenu = document.getElementById('mobileMenu');

  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
