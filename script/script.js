'use strict';

let hours = new Date();
let div = document.createElement('div');
let timesOfDay = function(){
  let goodMorning = 'Доброе утро!';
  let goodDay = 'Добрый день!';
  let goodNight = 'Доброй ночи!';
  let goodEvening ='Добрый вечер!';
  
  if(hours.getHours() <= 6 || hours.getHours() >= 22){
    div.innerHTML = '<div>' +goodNight+'</div>';
    document.body.append(div);
  } else if(hours.getHours() < 18 && hours.getHours() > 10){
    div.innerHTML ='<div>' + goodDay +'</div>';
    document.body.append(div);
  } else if(hours.getHours() > 18 && hours.getHours() < 22 ){
    div.innerHTML = '<div>' + goodEvening +'</div>';
    document.body.append(div);
  } else {
    div.innerHTML ='<div>' + goodMorning +'</div>';
    document.body.append(div);
  }

  
}
timesOfDay() ;


let divTwo = document.createElement('div');
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
divTwo.innerHTML =  '<div>' + `Сегодня: ${days[n]}` + '</div>';
document.body.append(divTwo);


let div3 = document.createElement('div');
let date = new Date();
div3.innerHTML =  '<div>' + (`Текущуу время : ${date.toLocaleTimeString('en')}`) + '</div>';
document.body.append(div3);


let div4 = document.createElement('div');
let NewYear = new Date(" Jan 1, 2022 00:00:00").getTime();
let nY = function(){
  let now = new Date().getTime();
  let distance = NewYear - now;
  let days = Math.floor(distance/(1000*60*60*24));
  div4.innerHTML =  '<div>' + (`До Нового Года осталось: ${days} Дней`)+ '</div>';
  document.body.append(div4);
}
nY();



