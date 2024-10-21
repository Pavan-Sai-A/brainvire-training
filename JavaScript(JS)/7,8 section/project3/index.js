'use strict';

const score0Ele = document.getElementById('score--0');
const score1Ele = document.getElementById('score--1');

const diceEle = document.querySelector('.dice');

const btnNewele = document.querySelector('.btn--new');
const btnHoldEle = document.querySelector('.btn--hold');
const btnRollEle = document.querySelector('.btn--roll');

const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');

const currentScore0Ele = document.getElementById('current--0');
const currentScore1Ele = document.getElementById('current--1');
//Random Number Generator
const randomNumber = Math.floor(Math.random() * 6 + 1);

let scores, state, activePlayer, currentScore;

// intilisation code
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  state = true;

  diceEle.classList.add('hidden');
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  currentScore0Ele.textContent = 0;
  currentScore1Ele.textContent = 0;
  player0Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--winner');
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
};

init();
// Switch Player Functionality
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

//Dice Button Functionaity
btnRollEle.addEventListener('click', function () {
  if (state) {
    //This will add random number to dice
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceEle.classList.remove('hidden');
    diceEle.src = `./images/dice-${randomNumber}.png`;
    //This will run Untill Score is 1
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// HOld Button Functionality
btnHoldEle.addEventListener('click', function () {
  if (state) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //This is For When The score is >=100
    if (scores[activePlayer] >= 20) {
      state = false;
      // this will remove Dice after winning Game
      diceEle.classList.add('hidden');
      //This will add background color after winning
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //This will remove active Functionality
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//New Game  Button Fnctionality
btnNewele.addEventListener('click', init);

{
  // 'use strict';
  // const btnroll = document.querySelector('.btn--roll');
  // let randNumber = Math.floor(Math.random() * 6 + 1);
  // let addimageofdice = document.querySelector('.dice');
  // let changeImage = function (data) {
  //   addimageofdice.src = data;
  // };
  // let data = function (randNumber) {
  //   switch (randNumber) {
  //     case 1:
  //       changeImage('./images/dice-1.png');
  //       break;
  //     case 2:
  //       changeImage('./images/dice-2.png');
  //       break;
  //     default:
  //       changeImage('./images/dice-6.png');
  //   }
  // };
  // btnroll.addEventListener('click', function () {
  //   console.log(randNumber);
  //   for (let i = 0; i < 6; i++) {
  //      setTimeout(data(i), 5000);
  //     // setTimeout(() => {}, 5000);
  //     // data(i);
  //   }
  //   //   data(randNumber);
  //   randNumber = Math.floor(Math.random() * 6 + 1);
  // });
}

//  let i = 1;
//  setInterval(function () {
//    if (i <= 6) {
//      diceEle.src = `./images/dice-${i}.png`;
//      console.log(i + 1);
//    } else if (i === 7) {
//      diceEle.src = `./images/dice-${randomNumber}.png`;
//      if (randomNumber !== 1) {
//        currentScore += randomNumber;
//        document.getElementById(`current--${activePlayer}`).textContent =
//          currentScore;
//      } else {
//        switchPlayer();
//      }
//    }
//    i++;
//  }, 1000);
