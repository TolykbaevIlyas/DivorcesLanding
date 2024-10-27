const images = document.querySelectorAll(".image");
const imageContainer = document.querySelector(".image-scroll-container");
const yearDisplay = document.querySelector(".year-display");

let currentIndex = 0;
let scrollPosition = 0; // Текущая накопленная позиция скролла
const threshold = 200; // Количество пикселей для смены картинки

// Массив с годами для отображения
const years = ["2017", "2019", "2021", "2023"];

// Флаг для блокировки скролла всей страницы
let blockPageScroll = true;

// Функция для обновления изображения и года
function updateImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  yearDisplay.textContent = years[index];
}

// Функция для обработки скролла внутри контейнера
function handleScroll(event) {
  // Блокируем скролл всей страницы, если flag активен
  if (blockPageScroll) event.preventDefault();

  scrollPosition += event.deltaY;

  // Обработка скролла вниз
  if (scrollPosition >= threshold && currentIndex < images.length - 1) {
    currentIndex++;
    updateImage(currentIndex);
    scrollPosition = 0;

    // Обработка скролла вверх
  } else if (scrollPosition <= -threshold && currentIndex > 0) {
    currentIndex--;
    updateImage(currentIndex);
    scrollPosition = 0;
  }

  // Разблокируем прокрутку страницы, если достигнута последняя картинка
  if (currentIndex === images.length - 1) {
    blockPageScroll = false;
    imageContainer.style.overflow = "auto"; // Разрешаем скролл страницы
  } else {
    blockPageScroll = true;
    imageContainer.style.overflow = "hidden"; // Блокируем скролл страницы
  }
}

// Добавляем обработчик скролла
imageContainer.addEventListener("wheel", handleScroll, { passive: false });

// IntersectionObserver для сброса состояния при входе в блок
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentIndex = 0; // Сброс к первой картинке
        updateImage(currentIndex);
        scrollPosition = 0; // Сброс накопленного скролла
        blockPageScroll = true; // Блокируем прокрутку страницы
        imageContainer.style.overflow = "hidden"; // Блокируем прокрутку внутри контейнера
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(imageContainer);
