const slidesData = [
  {
    quote: '"Очень доволен качеством товара"',
    text: 'Хочу выразить благодарность интернет-магазину за прекрасный товар и быструю доставку. Заказывал семена для своей коллекции. Качество превзошло все ожидания. Растения выросли здоровыми и крепкими. Рекомендую всем этот магазин!',
    author: 'Геннадий',
    location: 'г. Балтийск',
    image: 'img/gena_feedback.jpeg',
  },
  {
    quote: '"Буду заказывать еще"',
    text: 'Магазин порадовал большим выбором семян. Цены тоже устроили. Доставка была быстрой, всё пришло в целости. Я довольна, буду заказывать ещё.',
    author: 'Анна',
    location: 'г. Уфа',
    image: 'img/anna_feedback.jpeg',
  }
]

const sliderContainer = document.getElementById('sliderContainer');
let currentSlideIndex = 0;

const switchPrevSlide = () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex -= 1;
  }
  showSlide(currentSlideIndex);
};

const switchNextSlide = () => {
  if (currentSlideIndex < slidesData.length - 1) {
  currentSlideIndex += 1;
  }
  showSlide(currentSlideIndex);
};

document.getElementById('prevButton').addEventListener('click', switchPrevSlide);
document.getElementById('nextButton').addEventListener('click', switchNextSlide);

const createSlide = (slideData) => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `
    <div class="slide-content">
      <div class="slide-description">
        <h3 class="slide-quote">${slideData.quote}</h3>
        <p class="slide-text">${slideData.text}</p>
        <a href="#" class="slide-link">Читать отзыв полностью</a>
        <h4 class="slide-author">${slideData.author}</h4>
        <p class="slide-location">${slideData.location}</p>
      </div>
      <div class="slide-img">
        <img src="${slideData.image}" alt="${slideData.author}"
      </div>
    </div>
  `;
  return slide;
}

const showSlide = (index) => {
  slidesData.forEach((slide) => sliderContainer.appendChild(createSlide(slide)));
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      slides[i].classList.add('active-slide');
    } else {
      slides[i].classList.remove('active-slide');
    }
  }
}

showSlide(currentSlideIndex);
