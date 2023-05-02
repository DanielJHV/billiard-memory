const tableEl = document.querySelector('.table');
const movesEl = document.querySelector('.moves');

let moves = 0;

movesEl.textContent = `Moves: ${moves}`;

// const addCards = function () {
//   for (let i = 0; i < 12; i++) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     tableEl.append(card);
//   }
// };

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
  return cardData;
};

const generateCards = function () {
  const cardData = randomize();
  cardData.forEach(item => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');

    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    face.src = item.imgSrc;
    tableEl.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
};

generateCards();
