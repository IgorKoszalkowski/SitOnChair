document.addEventListener("DOMContentLoaded", function() {

var next = document.getElementById('nextPicture')
var prev = document.getElementById('prevPicture')
var list = document.querySelector('.slider').children
var num = 0;
console.log(list);

list[0].classList.add('visible');

 next.addEventListener('click', function(){
     list[num].classList.remove('visible');
   num++;
   if (num==list.length) {
     num = 0;
   }

list[num].classList.add('visible');

 });

 prev.addEventListener('click', function(){
   list[num].classList.remove('visible');
 num--;
 if (num < 0 ) {
   num = list.length -1
 }
 list[num].classList.add('visible');
 });



});
