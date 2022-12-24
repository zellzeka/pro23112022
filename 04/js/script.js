let amountUsa = parseInt(prompt("вкажіть кількість USD"));
let amountEuro = parseInt(prompt("вкажіть кількість Euro"));
let amountUa = parseInt(prompt("вкажіть кількість Гривень"));
let currensyType =(prompt("вкажіть бажаний тип валюти", "USD, EUR, UAH"));

let userWallet = new Object();
userWallet.amountUsa = amountUsa;
userWallet.amountEuro = amountEuro;
userWallet.amountUa = amountUa;

let bank =[
    {
        name: "USD",
        buy: 39,
        sell: 40,
    },
    {
        name: "EUR",
        buy: 41,
        sell: 42,
    },
    {
        name: "UAH",
        buy: 1,
        sell: 1,
    }
]
function availableCurr(obj, array2){
    let sellUsd;
    let sellEur;
    if (currensyType === "USD" && amountUa > 0){
        sellUsd = `Ви можете придбати ${obj.amountUa / array2[0].sell} долларів за ${amountUa} гривень`;
        console.log(sellUsd);
    } else if(currensyType === "EUR" && amountUa > 0){
        sellEur = `Ви можете придбати ${obj.amountUa / array2[1].sell} євро за ${amountUa} гривень`;
        console.log(sellEur);
    }  else {
        console.log("Введіть значення валюти для обчислень");
    }
    return [sellUsd, sellEur]
}
function availableHryvna(obj, array2){
    let hryvniaCounter = amountUa;
    if (currensyType === "USD"){
        hryvniaCounter = `Ви отримаєте ${obj.amountUsa * array2[0].buy} гривень`;
        console.log(hryvniaCounter);
    } else if(currensyType === "EUR"){
        sellEur = `Ви отримаєте ${obj.amountEuro * array2[1].buy} гривень`;
        console.log(hryvniaCounter);
    } 
    return hryvniaCounter;
}

availableCurr(userWallet, bank);
availableHryvna(userWallet, bank);
// ======================== Валютний калькулятор =========================

let distace = prompt("Введіть кількість кроків");
let direction = prompt("Введіть напрямок руху", "Південь, Північ, Захід, Схід");

function move (a, b) {
    let primaryMove = `${a} кроків на ${b}`;
    return primaryMove;
}

function moveUser(a, b, callBack){
    let finalMove = `Користувач премістився: ${callBack(a,b)}`
    console.log(finalMove);
    return finalMove;
}
moveUser(distace, direction, move);
// ===================== Функція переміщеннь користувача ========

let KeepRemove =["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];

if(KeepRemove.length > 0){
    for (let i = 0; i<KeepRemove.length; i++){
        KeepRemove.splice(i+1,1);

    }
} else {
    console.log("Массив пустий");
}
console.log(KeepRemove);
// =========================  видаляється кожний другий елемент масива =============

let figurs = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4,
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8,
    }
]

function figureArea(figurs){
    let SquarArea = `Площа квадрата складає: ${figurs[0].sizeA * figurs[0].sizeB}`;
    let RectangleArea = `Площа прямокутника складає: ${figurs[1].sizeA * figurs[1].sizeB}`;
    console.log(SquarArea, RectangleArea);
    return [SquarArea, RectangleArea];
}
figureArea(figurs);
// ===================== функція, що вираховує площу ================

let oldArr = [2,3,5,4,8,7,9,10];

function transformArr (oldArr){
    if (oldArr % 2 == 0){
        oldArr *= 4;
    } else {
        oldArr;
    }
    return oldArr;
}
let newArr = oldArr.map(transformArr);
console.log(newArr);
// ==================== массив що перемножує парні значення =============