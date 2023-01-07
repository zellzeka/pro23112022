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

let monthArr = [
    {
        name: "Січень",
        month: 1,
        days: 31,
    },
    {
        name: "Лютий",
        month: 2,
        days: 28,
    },
    {
        name: "Березень",
        month: 3,
        days: 31,
    },
    {
        name: "Квітень",
        month: 4,
        days: 30,
    },
    {
        name: "Травень",
        month: 5,
        days: 31,
    },
    {
        name: "Червень",
        month: 6,
        days: 30,
    },
    {
        name: "Липень",
        month: 6,
        days: 31,
    },
    {
        name: "Серпень",
        month: 8,
        days: 31,
    },
    {
        name: "Вересень",
        month: 9,
        days: 30,
    },
    {
        name: "Жовтень",
        month: 10,
        days: 31,
    },
    {
        name: "Листопад",
        month: 11,
        days: 30,
    },
    {
        name: "Грудень",
        month: 12,
        days: 31,
    }
];
let customerMonth = parseInt(prompt("Введіть номер місяця", 1,2,3));

function dayQuantity(data, arr){
    for (let {month, days} of arr){
        if (data == month){
            let currentDays = `У цьому місяці ${days} днів`
            
            console.log(currentDays);
            
        } else if (data + 1 == month){
             let nextDays = `У наступному місяці ${days} днів`
             console.log(nextDays);
        }
    }   
    return;
}

dayQuantity(customerMonth, monthArr);
