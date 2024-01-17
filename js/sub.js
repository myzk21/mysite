 'use strict';
 {
 //omikuji
 const omikujiBtn = document.getElementById('omikuji-btn');
 const omikujiResult = document.getElementById('omikuji-result');
 
 omikujiBtn.addEventListener('click', () => {
   const results = ['大吉', '吉', '中吉', '小吉', '末吉'];
   const n = Math.floor(Math.random() * results.length);
   omikujiResult.textContent = results[n];
 });
 }
 




 
 
 