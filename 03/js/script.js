let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
let arrResult =[];

function arrTransform (){
    for (i = 0; i < arrRandomNumbers.length; i++){
        if (arrRandomNumbers[i] % 2 == 0){
        arrResult.push(arrRandomNumbers[i]);
        }
    }
    console.log(arrResult);
    return arrResult
}

arrTransform (arrRandomNumbers);
// =====================функція, що повертає парні числа в масив===========


for (let i=0; i<5; i++){
    let customPurchase = [];
    let purchaseReq = prompt("Що бажаєте купити?", "Лате, Капучіно, Амерікано, Еспресо, Чай");
    customPurchase.push(purchaseReq);
    console.log(customPurchase);
}
// =======================цикл, що 5 разів виводить prompt==================


let arbitraryArray = [12,20,40,3,1];

function averageSum(){
    let sum = 0;
    for (let i=0; i<arbitraryArray.length; i++){ 
        sum += arbitraryArray[i];
    }
    sum /= arbitraryArray.length;
    console.log(sum);
    return sum;
}
averageSum(arbitraryArray);
console.log("Середньє значення масиву");
// ======================Функція що виводить середнє значення массиву==================

let smile = [':)', '=)',':)', '=)',':)', '=)'];

function smileTransform(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i] === '=)'){
            arr[i] = ':)';
        }  
    }
    document.write(arr);
    return arr;
}
smileTransform(smile);
// =======================let smile===============

let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];


function animalsTransform(array){
    let animalsResult = new Array();
    let customerRequest = prompt("введіть first або last");
    if (customerRequest === "first"){
        animalsResult.push(array.shift());
    } else if (customerRequest === "last"){
        animalsResult.push(array.pop());
    } else {
        alert("Программа опрацьовує лише значення first або last");
    }
    console.log(animalsResult);
    return array;
}
animalsTransform(animals);
// =========================== animals ==================

let averageArray = new Array(10,15,80,65,325);

function valueSum (Array){
    let sumValue = 0;
    for (let i=0; i<Array.length; i++){ 
        sumValue += Array[i];
    }
    console.log(sumValue);
    return sumValue;
}

valueSum(averageArray);
console.log("сумма всіх значеннь масиву");
// ======================== сумма всіх значеннь масиву ============

let slicedArr = ["Перше значення","Друге значення","Третє значення","Четверте значення", "П'яте значення", "Шосте значення","Сьоме значення"];
let startValue = parseInt (prompt("Введіть число з 0 до " + slicedArr.length));
let finishValue = parseInt (prompt(("Введіть число з " + startValue) + " по " + slicedArr.length));

function slicerFunction(array, a, b){
    array.splice(a, b-a);
    console.log(array);
    return array;   
}

slicerFunction(slicedArr, startValue, finishValue);
// ==================== функція що обрізає массив згідно аргументам ===============
