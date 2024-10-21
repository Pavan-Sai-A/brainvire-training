'use strict';
// // Selecting Text Content
// console.log(document.querySelector('.message').textContent);
// // updating Text Content
// document.querySelector('.message').textContent = 'Pavan';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Pavan';
// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 15
// console.log(document.querySelector('.guess').value)

// // On click

let randomNumer = Math.floor(Math.random() * 20 + 1);

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'Not a number';
  } else if (guess === randomNumer) {
    document.querySelector('.number').textContent = randomNumer;
    document.querySelector('.message').textContent = 'Correct';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.guess').style.display = 'none';
    // manuplating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== randomNumer) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumer ? 'Too High' : 'Too Low';
      score -= 1;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loose';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumer = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.guess').style.display = 'block';
  document.querySelector('.guess').value = 0;
});

// {
//   // // //else if (guess > randomNumer) {
// // //   //     if (score > 1) {
// // //   //       document.querySelector('.message').textContent = 'Too High';
// // //   //       score -= 1;
// // //   //       document.querySelector('.score').textContent = score;
// // //   //     } else {
// // //   //       document.querySelector('.message').textContent = 'Loose';
// // //   //       document.querySelector('.score').textContent = 0;
// // //   //     }
// // //   //   } else if (guess < randomNumer) {
// // //   //     if (score > 1) {
// // //   //       document.querySelector('.message').textContent = 'Too Low';
// // //   //       score -= 1;
// // //   //       document.querySelector('.score').textContent = score;
// // //   //     } else {
// // //   //       document.querySelector('.message').textContent = 'Loose';
// // //   //       document.querySelector('.score').textContent = 0;
// // //   //     }
// // //   //   }
// // //   // });
// }

//   else if (guess < randomNumer) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score -= 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Loose';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
