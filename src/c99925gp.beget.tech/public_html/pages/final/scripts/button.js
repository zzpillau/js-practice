const firstCards = document.getElementById('firstCards');
const secondCards = document.getElementById('secondCards');
console.log(firstCards);
console.log(secondCards);
const secondCardsHeader = document.getElementById('secondCardsHeader');

document.getElementById('toggleButton').addEventListener('click', () => {
  secondCards.classList.toggle('active-cards');
  firstCards.classList.toggle('runaway-cards');
});
