/*
============================================================================
 Набор Рарог Фреймворка <https://github.com/TheSkiF4er/Rarog-Framework-Kit/>
----------------------------------------------------------------------------
 Автор: SkiF4er <rarog@skif4er.ru>.
----------------------------------------------------------------------------
 Авторские права (c) 2022 SkiF4er. Данный код защищен авторскими правами.
============================================================================
 Лицензия: Creative Commons Attribution-ShareAlike 4 Всемирная.
============================================================================
 Файл: rarog.js
----------------------------------------------------------------------------
 Внешнее подключение: https://skif4er.ru/osp/rarogjs
============================================================================
*/
function clock() {
var d = new Date();
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");
days=new Array("Воскресенье", "Понедельник", "Вторник", "Среда",
"Четверг", "Пятница", "Суббота");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_date = day + " " + month[d.getMonth()] + " " + d.getFullYear() + " г. (" +
days[d.getDay()] + ")";
date_time = hours + ":" + minutes + ":" + seconds;

if (document.layers) {
 document.layers.date.document.write(date_time);
 document.layers.date.document.close();
 document.layers.time.document.write(date_time);
 document.layers.time.document.close();
}
else {
 document.getElementById("date").innerHTML = date_date;
 document.getElementById("time").innerHTML = date_time;
}
 setTimeout("clock()", 1000);
}
clock();
