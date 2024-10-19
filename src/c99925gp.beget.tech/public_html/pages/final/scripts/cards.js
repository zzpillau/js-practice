const cardsData = [
  {
    productImage: './img/marmande.jpg',
    productName: 'Марманде',
    productDescription: 'Реликтовый сорт французской селекции',
    productQuantity: 'В упаковке: 10 семян',
    productPrice: '₽150',
  },
  {
    productImage: './img/san-marzano.jpg',
    productName: 'Сан Марцано',
    productDescription: 'Идеальный итальянский томат для вяления',
    productQuantity: 'В упаковке: 10 семян',
    productPrice: '₽130',
  },
  {productImage: './img/ox-heart.jpg',
  productName: 'Бычье сердце',
  productDescription: 'Любимый томат вашей бабушки',
  productQuantity: 'В упаковке: 5 семян',
  productPrice: '₽180',
  }
]

const cardsData2 = [
  {
    productImage: './img/juice.jpeg',
    productName: 'Томатный сок',
    productDescription: 'Свежевыжат из вкуснейших биф-томатов',
    productQuantity: 'Бутылка 500 мл',
    productPrice: '₽90',
  },
  {
    productImage: './img/dried.jpeg',
    productName: 'Вяленные томаты',
    productDescription: 'Классический итальянский рецепт',
    productQuantity: 'Баночка 250 мл',
    productPrice: '₽250',
  },
  {productImage: './img/jam.jpeg',
  productName: 'Томатный джем',
  productDescription: 'Сладкие томаты-черри и специи',
  productQuantity: 'Баночка 300 мл',
  productPrice: '₽200',
  }
]

const createCard = (cardData) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-content">
      <img class="card-img" src="${cardData.productImage}" alt="${cardData.productName}">
      <div class="card-description">
        <h3 class="card-productName">${cardData.productName}</h3>
        <p class="card-productDescription">${cardData.productDescription}</p>
        <p class="card-productQuantity">${cardData.productQuantity}</p>
        <p class="card-productPrice">${cardData.productPrice}</p>
      </div>
      <button class="sticker-button">В корзину</button> 
    </div>
  `;
  return card;
}

const showCards = (cardsData, container) => {
  cardsData.forEach((card) => container.appendChild(createCard(card)));
}

const cardsContainer = document.getElementById('cardsContainer');
const cardsContainer2 = document.getElementById('cardsContainer2');

showCards(cardsData, cardsContainer);
showCards(cardsData2, cardsContainer2);
