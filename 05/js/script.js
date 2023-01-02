let userName = prompt("Введіть ім'я");
let userSecondName = prompt("Введіть прізвище");
let userAge = prompt("Введіть вік");

function UserCreator(name, secondname, age){
    this.Name = name;
    this.SecondName = secondname;
    this.Age = age;
    this.Id = Math.round(Math.random()*10);
}
UserCreator.prototype.displayData = function (){
     return `Ім'я юзера: ${this.Name} Прізвище юзера: ${this.SecondName} Вік юзера: ${this.Age}`;
}

let userData = new UserCreator(userName, userSecondName, userAge);
console.log(userData.displayData());
// ============================ конструктор що створює юзера============
UserCreator.prototype.NewData = function (){
    this.Name = prompt("Введіть нове ім'я");
    this.SecondName = prompt("Введіть нове прізвище");
    this.Age = prompt("Введіть новий вік");
    return
} 


userData.NewData();
console.log(userData.displayData());
// ===========================метод що змінює юзера======================

function GeometricConstructor (sideA, sideB){
    this.rectSideA = sideA;
    this.rectSideB = sideB;
}
GeometricConstructor.prototype.areaCalc = function(){
    rectArea = this.rectSideA * this.rectSideB;
    return rectArea;
}
GeometricConstructor.prototype.perimeterCalc = function(){
    rectPerimeter = 2 * this.rectSideA + 2 * this.rectSideB;
    return rectPerimeter;
}
GeometricConstructor.prototype.diagonalCalc = function(){
    rectDiagonal = Math.sqrt(Math.pow(this.rectSideA, 2) + Math.pow(this.rectSideB, 2));
    return rectDiagonal;
}
let rectangle = new GeometricConstructor(5, 10);
rectangle.areaCalc();
rectangle.diagonalCalc();
rectangle.perimeterCalc();
console.log(rectArea);
console.log(rectPerimeter);
console.log(rectDiagonal);
// ============================ конструктор прямокутника ==================

let nameUser = prompt("Введіть ім'я");
nameUser.trim();
let slicedNameUser = `${nameUser.slice(0,1)} ${nameUser.slice(-1)}`;
console.log(slicedNameUser.toLocaleUpperCase());
// ========================== обрізка Ім'я користувача =====================

let userString = prompt("Введіть текст");
userString.trim();
if(userString.length>10){
    userString = `${userString.slice(0,10)}...`
}
console.log(userString);