let firstInt = prompt("Введіть перше число");
let secondInt = prompt("Введіть перше число");

console.log(parseInt (firstInt) + parseInt(secondInt));
console.log(secondInt - firstInt);
console.log(secondInt * firstInt);
console.log(secondInt / firstInt);
console.log(secondInt % firstInt);
console.log(++secondInt);
console.log(secondInt++);
console.log(secondInt);
console.log(--secondInt);
//========================Перша частина завдання==========================

let userName = prompt("Введіть ім'я");
let userLastName = prompt("Введіть прізвище");

document.write("User name: "+ userName + " " + "User last name: "+ userLastName);
//======================Друга частина завдання=============================

let uk = prompt("Введіть uk");
let ru = prompt("Введіть ru");
let UkResult = uk == uk;
let RuResult = ru == uk;
console.log(UkResult);
console.log(RuResult);
//======================Третя частина завдання=======================

let firstValue = prompt("введіть число");
let srcondValue = prompt("введіть друге число");
let resultValue = firstValue>20 && srcondValue>30;
console.log(resultValue);
//======================Четверта частина завдання====================