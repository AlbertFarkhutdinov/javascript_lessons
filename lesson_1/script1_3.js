// Ответ на вопрос с вебинара: "Как поменять местами значения двух переменных без использования третьей". Работает для переменных типа number.
'use strict';
var a = 10;
var b = 20;
alert('Первое число: ' + a + '\nВторое число: ' + b);
a = a + b;
b = a - b;
a = a - b;
alert('Первое число: ' + a + '\nВторое число: ' + b);