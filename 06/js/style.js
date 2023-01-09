function sumArray(...term){
    let sum = 0;
    term.forEach(item => sum += item);
    return sum;
}
console.log(sumArray(100, 200, 24));
// ================ функція що вираховує сумму аргументів ==============

let birthDay = parseInt(prompt("Введіть день народження"));
let birthMonth = parseInt(prompt("Введіть місяць народження")) - 1;
let brthYear = parseInt(prompt("Введіть рік народження"));

function birthdayFunction(day, month, year){
    let todayDate = new Date();
    if (day === todayDate.getDate() && month === todayDate.getMonth()){
        console.log(`З днем народження! Вам виповнилося ${todayDate.getFullYear() - year} років`);
    } else {
        console.log(`Вам ${todayDate.getFullYear() - year} років`);
    }
    return;
}

birthdayFunction(birthDay, birthMonth, brthYear);
// ======================== функція яка вираховує вік =======

let todayDate = new Date();
let ageValue = todayDate.getFullYear() - brthYear;
function birthdayCallback() {
    return console.log(`З днем народження! Вам виповнилося ${ageValue} років`);
}

function birthdayFunction(day, month, year, callback){
    
    if (day === todayDate.getDate() && month === todayDate.getMonth()){
        callback();
    } else {
        console.log(`Вам ${ageValue} років`);
    }
    return;
}
birthdayFunction(birthDay, birthMonth, brthYear, birthdayCallback);
// ======================= модифікована функція яка вираховує вік ==================

let customerYear = parseInt(prompt("Введіть рік"));

function centuryCalc(...year) {
    return Math.ceil(year / 100);
}

console.log(centuryCalc(customerYear));
// ====================== функція, що вираховує столлітя за роком ==============


let customerMonth = parseInt(prompt("Введіть номер місяця", 1,2,3));
let customYear =  parseInt(prompt("Введіть рік", 2023));


function dayQuantity(month, year){
    let currentQuant = new Date(year, month, 0).getDate();
    let nextQuant = new Date(year, month + 1, 0).getDate();
    console.log(`У цьому місяці ${currentQuant} днів, у наступному місяці ${nextQuant} днів`)
    return;
}

dayQuantity(customerMonth, customYear);