'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openmodal);
}
btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

//Esc Key to remove modal

document.addEventListener('keydown', function (event) {
  console.log('keypressd');
  if (event.key == 'Escape') {
    if (!modal.classList.contains('hidden')) closemodal();
  }
});

// {
// // console.log(btnOpenModal);
// // document.querySelector('.show-modal').addEventListener('click', function () {
// //   document.querySelector('.hidden').style.display = 'block';
// // });
// }
