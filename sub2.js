'use strict';
{

  function render(quizzes) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    

   h2.textContent = quizzes[0];
   const ol = document.createElement('ol');


   const li0 = document.createElement('li');
   li0.textContent = quizzes[1];
   li0.classList.add('skyblue'); //水色の背景色つける

   li0.addEventListener('click', () => {
    if (quizzes[4] === 0) {
      li0.classList.remove('skyblue');
      li0.classList.add('correct');
    } else {
      li0.classList.remove('skyblue');
      li0.classList.add('wrong');
    }
  }); 

  const li1 = document.createElement('li');
   li1.textContent = quizzes[2];
   li1.classList.add('skyblue');

   li1.addEventListener('click', () => {
    if (quizzes[4] === 1) {
      li1.classList.remove('skyblue');
      li1.classList.add('correct');
    } else {
      li1.classList.remove('skyblue');
      li1.classList.add('wrong');
    }
  }); 

  const li2 = document.createElement('li');
   li2.textContent = quizzes[3];
   li2.classList.add('skyblue');

   li2.addEventListener('click', () => {
    if (quizzes[4] === 2) {
      li2.classList.remove('skyblue');
      li2.classList.add('correct');
    } else {
      li2.classList.remove('skyblue');
      li2.classList.add('wrong');
    }
  }); 


    ol.appendChild(li0);
    ol.appendChild(li1);
    ol.appendChild(li2);

    section.appendChild(h2);
    section.appendChild(ol);
    main.appendChild(section);
}

const quizzes = [
  ['サハラ砂漠の「サハラ」とはどんな意味？', '砂漠', '灼熱の', '広大な', 0],
  ['アラビア数字が生まれた場所は？', 'エジプト', 'トルコ', 'インド', 2],
  ['押忍という言葉は何の略？', 'おはようございます', 'お願いします', 'お手伝いします', 0],
  ['まな板の「まな」とは何を指している？', '真っ白なこと', '魚', '平らなこと', 1]
];

quizzes.forEach((quiz) => {
  render(quiz);
});






  
}