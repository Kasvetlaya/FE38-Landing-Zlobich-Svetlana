// Task 1. Вывести в консоль свое имя
console.log("Svetlana")

// Task 2. Вывести в консоль число, месяц и год своего рождения
console.log("22.11.1982")

// Task 3. Вывести в консоль - Добро пожаловать в мир Java Script
console.log("Добро пожаловать в мир Java Script")

// Task 4. Вывести в alert сегодняшний год. После данную строку с кодом следует закоментировать.
// let Year = 2022 ;
// alert( Year );
// alert(2022);

// Task 5. C помощью alert вывести результат операции 400 + 500. Закоментировать.
// let a = 400;
// let b = 500;
// alert( a+b );
// alert(400+500);

// Task 6. Создать на странице div с id = task6. С помощью document.querySelector() запишите в данный элемент текст '<p>Мой первый вывод на страницу</p>'.
// Изучить способ получения нашего дива. Изучить команду вывода.

// Раскоментировать этот код
let div6 = document.querySelector('#task6');
// div6.innerHTML = "<p>Мой первый вывод на страницу</p>";
div6.textContent = "<p>Мой первый вывод на страницу</p>";

// Task 7. Создайте на странице div с id = task7 С помощью document.querySelector() запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки.
let div7 = document.querySelector('#task7');
let a = 12;
let b = 12;
var result = a * b;
// alert(result);
div7.textContent = result;

// Task 8. Создайте div с классом task8. С помощью document.querySelector() запишите в данный элемент текст 'Вывод элемента по классу'.
// Изучить способ получения нашего дива. Изучить команду вывода.
let div8 = document.querySelector('.task8');
div8.innerHTML = "'Вывод элемента по классу'.";

// Task 9. Создайте следующую верстку на странице:
//<h2>Hello <span>everyone</span></h2>
// Замените с помощью document.querySelector() текст everyone на world.
// Изучить способ получения нашего дива. Изучить команду вывода.
let h2 = document.querySelector('span');
h2.innerHTML = "world.";

// Task 10. Создайте div с классом task10. Получите его в переменную task10. С помощью innerHTML запишите внутрь переменной task10 число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
let div10 = document.querySelector('.task10');
div10.innerHTML = 3.1415;

// Task 11. Создайте div с классом task11. Получите его в переменную task11. С помощью innerHTML запишите в него строку:
// <img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">
//Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки.
const Picture = document.querySelector('.task11');
Picture.innerHTML = '<img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">';

// Task 12. Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
const MULT12 = document.querySelector('.mult12');
let z1 = 6;
let z2 = 3;
var result = z1 + z2;
MULT12.textContent = result;

// создадим див с класом произвольным
// помнестим умножение в переменную результат

// Task 13. Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.
const DIVIZION13 = document.querySelector('.division13');
let y1 = 6;
let y2 = 3;
var result = z1 / z2;
DIVIZION13.textContent = result;
// Task 14. Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.
//
const SUM14 = document.querySelector(".sum"); 
let x1 ='Hello';
let x2 = 5;
var result = x1 + x2;
SUM14.textContent = result;
