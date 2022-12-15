let firstNumber = parseFloat(prompt('Type number', 0));
let SecondNumber = parseFloat(prompt('Type number', 0));
let operationNumber = prompt('Operation');
let result = 0;
if(operationNumber == '+'){
    result = firstNumber + SecondNumber;
    console.log('Plus value:', result);
}
else if(operationNumber == '/' && SecondNumber == "0"){
    console.log("Ділити на 0 не можна!");
}
else if(operationNumber == '*'){
    result = firstNumber * SecondNumber;
    console.log('Multiplie value:', result);
}
else if(operationNumber == '/'){
    result = `'Quotient value:' ${firstNumber / SecondNumber}`;
    console.log(result);
}
else if(operationNumber == '-'){
    result = `Differense value: ${firstNumber - SecondNumber}`;
    console.log(result);
}
else{
    console.log('Operation not found');
}
// ===========================Калькулятор======================

let divisorNumber = 20;
let denominatorNumber = 2;

while (divisorNumber !== 0){
    if(divisorNumber % denominatorNumber === 0) {
        console.log(divisorNumber);
    }
    divisorNumber-- ;
}
console.log("це парні значення числа 20")
// ======================== парні значення числа 20 ==============

let aValue = parseInt(prompt("Введіть преше число", 0));
let bValue = parseInt(prompt("Введіть число, що більше першого", 0));

while (aValue < bValue){
    let result = aValue + bValue;
    console.log(result);
    break
} if(aValue > bValue){
    alert("Ведіть вірне значення");
}
console.log("сумма чисел між  А і В, якщо A<B");
// ==============================сумма чисел між  А і В, якщо A<B================

let firstValue = parseInt(prompt("Введіть число", 0));

for(let i=firstValue; i>=0; i--){
    console.log(i);
}
console.log("Данні навпаки");
// =============================цикл що виводить данні навпаки=================

let long = parseInt(prompt("Введіть довжину", 0));
let lat = parseInt(prompt("Введіть ширину", 0));

for (i=0; i<long; i++){
        for (j=0;j<lat;j++){
            document.write("*");
        }
        document.write("<br>");
    } 
//================================ * фігура ==============================

let login = prompt("Введіть логін admin");
let password = parseInt(prompt("Введіть пароль 12345"));

if (login === "admin" && password === 12345){
    console.log("Вітаємо в системі");
} else {
    console.log("Пароль логін не вірні");
}
// ===========================Запит пароля та логіна=============================

let firstUserValue =  parseInt(prompt("Введіть перше значення"));
let secondUserValue = parseInt(prompt("Введіть друге значення"));
let thirdUserValue = parseInt(prompt("Введіть третьє значення"));

let meanResult = (firstUserValue + secondUserValue + thirdUserValue) / 3;
console.log(meanResult);
// ==============================Середньє значення трьох значеннь========================

let SolarPlanet = prompt("Введіть назву планети", "Земля");

switch(SolarPlanet){
    case "Меркурій":
    case "меркурій":
        console.log("Меркурій - планета сонячної системи");
        break;
    case "Венера":
    case "Венера":
        console.log("Венера - планета сонячної системи");
        break;
    case "Земля":
    case "земля":
        console.log("Земля - планета сонячної системи");
        break;
    case "Марс":
    case "марс":
        console.log("Марс - планета сонячної системи");
        break;
    case "Юпітер":
    case "юпітер":
        console.log("Юпітер - планета сонячної системи");
        break;
    case "Сатурн":
    case "сатурн":
        console.log("Сатурн - планета сонячної системи");
        break;
    case "Уран":
    case "уран":
        console.log("Уран - планета сонячної системи");
        break;
    case "Нептун":
    case "нептун":
        console.log("Нептун - планета сонячної системи");
        break;
    default:
        console.log("Такої планети нема в сонячній системі");   
}
// =========================switch з планетами===============

let usersPrice = parseInt(prompt("Введіть число більше 0"));

if(usersPrice>100){
    let userDiscount = usersPrice - usersPrice / 100 * 3;
    console.log("Ваша ціна зі знижкою:" + userDiscount);
} else if(usersPrice>1000){
    userDiscount = usersPrice - usersPrice / 100 * 5;
    console.log("Ваша ціна зі знижкою:" + userDiscount);
} else if(usersPrice>10000){
    userDiscount = usersPrice - usersPrice / 100 * 7;
    console.log("Ваша ціна зі знижкою:" + userDiscount);
} else {
    console.log("У вас нема знижки до сплати число яке було введене");
}
// =======================калькулятор знижок================================

let usersAnimal = prompt("Введіть назву тварини", "Корова, Кішка, Собака, Півень");

switch(usersAnimal){
    case "Кішка":
        console.log("Мяу");
        break;
    case "Корова":
        console.log("Мууу");
        break;
    case "Собака":
        console.log("Гав-Гав");
        break;
    case "Півень":
        console.log("Ку-ка-ре-ку");
        break;
    default:
        console.log("Не знаю такої тварини");
}