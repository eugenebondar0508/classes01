'use strict';


let hours = new Date();
let timesOfDay = function(){
  if(hours.getHours() <= 6 || hours.getHours() >= 22){
    alert('Доброй ночи!');
  } else if(hours.getHours() < 18 && hours.getHours() > 10){
    alert('Добрый день!');
  } else if(hours.getHours() > 18 && hours.getHours() < 22 ){
    alert('Добрыый вечер!');
  } else {
    alert('Доброе утро!');
  }
}
timesOfDay();

let days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
let d = new Date();
let n = d.getDay();
console.log(`Сегодня: ${days[n]}`);

let date = new Date();
console.log(`Текущуу время : ${date.toLocaleTimeString('en')}`);



let NewYear = new Date(" Jan 1, 2022 00:00:00").getTime();
let count = setInterval(function(){
  let now = new Date().getTime();
  let distance = NewYear - now;
  let days = Math.floor(distance/(1000*60*60*24));
  console.log(`До Нового Года осталось: ${days} Дней`)

}, 1000)

