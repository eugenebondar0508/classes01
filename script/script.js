'use strict';


// let timesOfDay = function(){
//   let hours = new Date();
//   let divForTimesOfDay = document.createElement('div');
//   let goodMorning = 'Доброе утро!';
//   let goodDay = 'Добрый день!';
//   let goodNight = 'Доброй ночи!';
//   let goodEvening ='Добрый вечер!';
  
//   if(hours.getHours() <= 6 || hours.getHours() >= 22){
//     divForTimesOfDay.innerHTML = '<div>' +goodNight+'</div>';
//     document.body.append(divForTimesOfDay);
//   } else if(hours.getHours() < 18 && hours.getHours() > 10){
//     divForTimesOfDay.innerHTML ='<div>' + goodDay +'</div>';
//     document.body.append(divForTimesOfDay);
//   } else if(hours.getHours() > 18 && hours.getHours() < 22 ){
//     divForTimesOfDay.innerHTML = '<div>' + goodEvening +'</div>';
//     document.body.append(divForTimesOfDay);
//   } else {
//     divForTimesOfDay.innerHTML ='<div>' + goodMorning +'</div>';
//     document.body.append(divForTimesOfDay);
//   }

  
// }
// timesOfDay() ;

// const showDay = () =>{
//   let divForShowDay = document.createElement('div');
//   let days = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
//   ];
//   let day = new Date();
//   let now = day.getDay();
//   divForShowDay.innerHTML =  '<div>' + `Сегодня: ${days[now]}` + '</div>';
//   document.body.append(divForShowDay);
// };

// showDay();



// const showTime = () => {
//   let divForShowTime = document.createElement('div');
//   let date = new Date();
//   divForShowTime.innerHTML =  '<div>' + (`Текущуу время : ${date.toLocaleTimeString('en')}`) + '</div>';
//   document.body.append(divForShowTime);
// }
// showTime();







// let timeToNewYear = function(){
//   let divForNewYear = document.createElement('div');
//   let newYear = new Date(" Jan 1, 2022 00:00:00").getTime();
//   let now = new Date().getTime();
//   let distance = newYear - now;
//   let days = Math.floor(distance/(1000*60*60*24));
//   divForNewYear.innerHTML =  '<div>' + (`До Нового Года осталось: ${days} Дней`)+ '</div>';
//   document.body.append(divForNewYear);
// }
// timeToNewYear();





// ADVANCED TASK for 7th lesson


const showDays = () => {
  
  let today = new Date().getDay();
  let week = [
    
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];
  
for (let day = 0; day < week.length; day++){
  if(day === today){
    if (week[day]  === 'Воскресенье'|| week[day]  === 'Суббота' ){
      document.write(`<p><b><i>${week[day]}</i></b></p>`)
    }  else{
      document.write(`<p><b>${week[day]}</b></p>`);
    }
  } else if(week[day]  === 'Воскресенье'|| week[day]  === 'Суббота' ){
    document.write(`<p><b>${week[day]}</b></p>`);
  }
  else {
    document.write(`<p>${week[day]}</p>`);
  }

}

}
showDays();

