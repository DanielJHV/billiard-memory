'use strict';

const tableEl = document.querySelector('.table');
const movesEl = document.querySelector('.moves');
const modalEl = document.querySelector('.modal');
const winningText = document.querySelector('.winning-message__text');
const restartBtn = document.querySelector('.restart-btn');

let moves = 0;
movesEl.textContent = `Moves: ${moves}`;

const getData = function () {
  return [
    { imgSrc: '../img/ball-yellow.png', name: 'yellow' },
    { imgSrc: '../img/ball-blue.png', name: 'blue' },
    { imgSrc: '../img/ball-purple.png', name: 'purple' },
    { imgSrc: '../img/ball-orange.png', name: 'orange' },
    { imgSrc: '../img/ball-red.png', name: 'red' },
    { imgSrc: '../img/ball-black.png', name: 'black' },
    { imgSrc: '../img/ball-yellow.png', name: 'yellow' },
    { imgSrc: '../img/ball-blue.png', name: 'blue' },
    { imgSrc: '../img/ball-purple.png', name: 'purple' },
    { imgSrc: '../img/ball-orange.png', name: 'orange' },
    { imgSrc: '../img/ball-red.png', name: 'red' },
    { imgSrc: '../img/ball-black.png', name: 'black' },
  ];
};

const randomize = function () {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  console.log(cardData);
  return cardData;
};

const generateCards = function () {
  const cardData = randomize();

  cardData.forEach((item, index) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');

    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    face.src = item.imgSrc;
    card.setAttribute('name', item.name);

    tableEl.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', function (e) {
      card.classList.add('clicked');
      checkCards(e);
    });
  });
};

generateCards();

const checkCards = function (e) {
  const allCards = document.querySelectorAll('.card');
  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped');
  if (flippedCards.length === 2) {
    moves += 1;
    movesEl.textContent = `Moves: ${moves}`;
    if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
      console.log('match');

      flippedCards.forEach(card => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      });
      verifyWin(allCards);
    } else {
      allCards.forEach(card => {
        card.style.pointerEvents = 'none';
      });
      console.log('wrong');
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
        setTimeout(() => {
          card.classList.remove('clicked');
          allCards.forEach(card => {
            card.style.pointerEvents = 'auto';
          });
        }, 1000);
      });
    }
  }
};

const restartGame = function () {
  tableEl.innerHTML = '';
  modalEl.classList.add('hidden');
  generateCards();
};

const endGame = function () {
  winningText.textContent = `You've successfully completed the game in ${moves} moves.`;
  modalEl.classList.remove('hidden');
};

const verifyWin = function (allCards) {
  let clickedCards = 0;
  allCards.forEach(card => {
    if (card.classList.contains('clicked')) {
      clickedCards += 1;
      console.log(clickedCards);
    }

    if (clickedCards === 12) {
      console.log('You won!');
      endGame();
    }
  });
};

restartBtn.addEventListener('click', restartGame);
