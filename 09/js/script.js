window.onload=()=>{
    let sliderArr = ["img/newyork.jpg", "img/london.jpg", "img/paris.jpg", "img/roma.jpg"];
    let currentImg = document.querySelector('.carucel');
    let counter = 0;

    function changeImage () {
        currentImg.src = sliderArr[counter];
        counter++;
        if (counter == sliderArr.length){
            counter = 0;
        }
    }
    let interval = setInterval (changeImage, 3000);
    // =========== Карусель з таймером ===========

    let prevButton = document.querySelector('.carousel-control-prev');
    let nextButton = document.querySelector('.carousel-control-next');

    
    function prevImg (){
        currentImg.src = sliderArr[counter];
        if (counter === 0){
            counter = 4;
        } 
        counter--;
        
    }
    prevButton.addEventListener('click', prevImg);
    

    function nextImg (){
        
        currentImg.src = sliderArr[counter];
        if (counter === 3){
            counter = -1;
        } 
        counter++;
    }
    nextButton.addEventListener('click', nextImg);
    currentImg.onmouseover = ()=> clearInterval(interval);
    
    // ========== Кнопки ===================

    let timerHeader = document.querySelector('.timer-header');
    let timerBody = document.createElement('div');
    timerHeader.after(timerBody);
    let timerCounter = 0;

    function timerFunction(){
        timerCounter++;
        timerBody.innerText = timerCounter;
        if (timerCounter === 60){
            alert("Ви дочикались знижок");
            clearInterval(timerInterval);
            timerBody.innerText ="";
        }
        
    }
    let timerInterval = setInterval(timerFunction, 1000);
    // ========== таймер ================

    let startButton = document.querySelector('.btn-primary');
    let modalWindow = document.querySelector('.modale');
    let closeButton = document.querySelector('.btn-secondary');
    let modalDialog = document.querySelector('.modal-content');

    function openModal (){
        modalWindow.className += " modale--active";
        
        let modalWidth = modalDialog.clientWidth;
        let modalHeight = modalDialog.clientHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        modalDialog.setAttribute('style', `top:${windowHeight/2-modalHeight/2}px; left:${windowWidth/2-modalWidth/2}px;`); 
        
    }

        function closeModal (event){
                if((event.target == modalWindow) || (event.target == closeButton)){
                    modalWindow.classList.remove('modale--active');
                    modalDialog.setAttribute('aria-hidden', 'true');
                } else {
                    event.stopPropagation();
                }
                
            } 

    startButton.addEventListener('click', openModal);
    modalWindow.addEventListener('click', closeModal);
    
    
}