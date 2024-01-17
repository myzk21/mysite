'use strict';
{
 //games
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const omikujiUl = document.getElementById('omikuji-ul');
const slides = omikujiUl.children;
let currentIndex = 0;

function updateButtons() {
  prev.classList.remove('hidden');
  next.classList.remove('hidden');

  if(currentIndex === 0) {
    prev.classList.add('hidden');
  }
  if(currentIndex === slides.length - 1) {
    next.classList.add('hidden');
  }
}
function moveSlides() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  omikujiUl.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
}

updateButtons();

next.addEventListener('click', () => {
  currentIndex++;
  updateButtons();
  moveSlides();

});

prev.addEventListener('click', () => {
  currentIndex--;
  updateButtons();
  moveSlides();
});

//send
const send = document.getElementById('send');
const message = document.getElementById('message');
const attention = document.getElementById('attention');

send.addEventListener('click', () => {
message.classList.add('show');
});

attention.addEventListener('click', () => {
message.classList.remove('show');
});


}
