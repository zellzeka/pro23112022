window.onload = ()=>{
    let namesList = document.querySelector('.nav');
    let textProcessor = document.querySelector('.form-control');
    let btnProcessor = document.querySelector('.btn');
    function addText(){
        if(textProcessor.value !== ""){namesList.removeChild(namesList.firstElementChild);
        let newLi = document.createElement('li');
        newLi.textContent = `${textProcessor.value}.   Данні передані ${Date()}`;
        namesList.appendChild(newLi);
        textProcessor.value ='';
        } else {
        alert('Введіть імя');
        }
    }
    btnProcessor.addEventListener('click', addText);

    // ======== Лінки зображення ===========
    class ArrayCreator{
        constructor(img, alt, href){
            this.image = img;
            this.altertext = alt;
            this.href = href;
        }
    }
    let newYork = new ArrayCreator("img/newyork.jpg", "Зображення Нью Йорка", "https://en.wikipedia.org/wiki/New_York_City");
    let london = new ArrayCreator("img/london.jpg", "Зображення Лондона", "https://en.wikipedia.org/wiki/London");
    let paris = new ArrayCreator("img/paris.jpg", "Зображення Парижа", "https://en.wikipedia.org/wiki/Paris");
    let roma = new ArrayCreator("img/roma.jpg", "Зображення Рима", "https://en.wikipedia.org/wiki/Rome");
    let objectArr = new Array(newYork, london, paris, roma); 
    let galleryDiv = document.querySelector('.gallery');
    let galleryFragment = new DocumentFragment();

    function galleryCreator (arr){
        for (let {image, altertext, href} of arr){
            let newlink = document.createElement('a');
            newlink.setAttribute('href', href);
            let newImage = document.createElement('img');
            newImage.setAttribute('alt', altertext);
            newImage.setAttribute('src', image);
            newImage.setAttribute('class', 'w-25');
            newlink.appendChild(newImage);
            galleryFragment.appendChild(newlink);
        }
        galleryDiv.appendChild(galleryFragment);
    }
    galleryCreator(objectArr);

    // ======== таблиця ===============

    let headerArr = ["ім'я", "місто", "курс"];
    let tableContainer = document.querySelector('.tab');
    let tableBase = document.createElement("table");
    tableBase.setAttribute('class', 'table');
    let tableFragment = new DocumentFragment();

    function tableBaseCreator (arr){
        let tableRow = document.createElement("tr");
        arr.forEach(element => {
            let tableHead = document.createElement("th");
            tableHead.setAttribute('scope', 'col');
            tableHead.innerText = element;
            tableRow.appendChild(tableHead);
        });
        tableBase.appendChild(tableRow);
        tableFragment.appendChild(tableBase);
        tableContainer.appendChild(tableFragment);
    }
    tableBaseCreator(headerArr);

    function tableBodyCreator (name, sity, course){
        let auxArray = [name, sity, course];
        let tableRow = document.createElement("tr");
        auxArray.forEach(element => {
            let tableData = document.createElement("td");
            tableData.innerText = element;
            tableRow.appendChild(tableData);
        });
        tableBase.appendChild(tableRow);
        tableFragment.appendChild(tableBase);
        tableContainer.appendChild(tableFragment);
    }
    tableBodyCreator("Василь","Київ","перший");
    tableBodyCreator("Дмитро","Запоріжжя","третій");
    tableBodyCreator("Олександр","Львів","другий");
    tableBodyCreator("Сергій","Харків","другий");
    
}