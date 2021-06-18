'use strict';

let hours = new Date();
let div = document.createElement('div');
let timesOfDay = function(){
  let goodMorning = 'Доброе утро!';
  let goodDay = 'Добрый день!';
  let goodNight = 'Доброй ночи!';
  let goodEvening ='Добрыый вечер!';
  
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
div.innerHTML =  '<div>' + (`Сегодня: ${days[n]}`) + '</div>';
document.body.append(div);

let date = new Date();
div.innerHTML =  '<div>' + (`Текущуу время : ${date.toLocaleTimeString('en')}`) + '</div>';
document.body.append(div);



let NewYear = new Date(" Jan 1, 2022 00:00:00").getTime();
let nY = function(){
  let now = new Date().getTime();
  let distance = NewYear - now;
  let days = Math.floor(distance/(1000*60*60*24));
  div.innerHTML =  '<div>' + (`До Нового Года осталось: ${days} Дней`)+ '</div>';
  document.body.append(div);
}
nY();



