window.onload = ()=>{
    let sizeSelect = document.querySelector('#inputGroupSelect01');
    let bigSize = document.querySelector('.bigpizza');
    let mediumSize = document.querySelector('.mediumpizza');
    let smallSize = document.querySelector('.smallpizza');
    let bigSizePrice = Number(document.querySelector('.big-size-price').textContent.split(' ').shift());
    let mediumSizePrice = Number(document.querySelector('.medium-size-price').textContent.split(' ').shift());
    let smallSizePrice = Number(document.querySelector('.small-size-price').textContent.split(' ').shift());
    let selectedPrice = document.querySelector('.selected-price-title');
    selectedPrice.textContent = 0;

    function selectionSize (e){
        let sizeValue = e.target.value;
        sizeSelect.setAttribute('disabled','');
        if (sizeValue == 1){
            bigSize.classList.replace('d-none', 'd-block');
            mediumSize.classList.replace('d-block', 'd-none');
            smallSize.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${bigSizePrice} грн`;
        } else if (sizeValue == 2){
            mediumSize.classList.replace('d-none', 'd-block');
            bigSize.classList.replace('d-block', 'd-none');
            smallSize.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${mediumSizePrice} грн`;
        } else if(sizeValue == 3){
            smallSize.classList.replace('d-none', 'd-block');
            bigSize.classList.replace('d-block', 'd-none');
            mediumSize.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${smallSizePrice} грн`;
        }
        return selectedPrice;
    }
    sizeSelect.addEventListener('change', selectionSize);
    // ==========вибір розміру ===========

    let fillingSelect = document.querySelector('#inputGroupSelect02');
    let meatpizzaCard = document.querySelector('.meatpizza');
    let chiesepizzaCard = document.querySelector('.chiesepizza');
    let hawaianpizzaCard = document.querySelector
    ('.hawaianpizza');
    let margartapizzaCard = document.querySelector('.margartapizza');
    let meatpizzaPrice = 200;
    let chiesepizzaPrce = 170;
    let hawaianpizzaPrice = 160;
    let margartapizzaPrice = 150;

    function selectionFilling(e){
        let fillingValue = e.target.value;
        fillingSelect.setAttribute('disabled','');
        if (fillingValue == 1){
            meatpizzaCard.classList.replace('d-none', 'd-block');
            chiesepizzaCard.classList.replace('d-block', 'd-none');
            hawaianpizzaCard.classList.replace('d-block', 'd-none');
            margartapizzaCard.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + meatpizzaPrice} грн`;
            document.querySelector('.meatpizza-price').textContent = `${meatpizzaPrice} грн`;
            
        } else if (fillingValue == 2){
            chiesepizzaCard.classList.replace('d-none', 'd-block');
            meatpizzaCard.classList.replace('d-block', 'd-none');
            hawaianpizzaCard.classList.replace('d-block', 'd-none');
            margartapizzaCard.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + chiesepizzaPrce} грн`;
            document.querySelector('.chiesepizza-price').textContent = `${chiesepizzaPrce} грн`;

        } else if(fillingValue == 3){
            hawaianpizzaCard.classList.replace('d-none', 'd-block');
            chiesepizzaCard.classList.replace('d-block', 'd-none');
            meatpizzaCard.classList.replace('d-block', 'd-none');
            margartapizzaCard.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + hawaianpizzaPrice} грн`;
            document.querySelector('.hawaianpizza-price').textContent = `${hawaianpizzaPrice} грн`;
        } else if(fillingValue == 4){
            margartapizzaCard.classList.replace('d-none', 'd-block');
            hawaianpizzaCard.classList.replace('d-block', 'd-none');
            chiesepizzaCard.classList.replace('d-block', 'd-none');
            meatpizzaCard.classList.replace('d-block', 'd-none');
            selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + margartapizzaPrice} грн` ;
            document.querySelector('.margartapizza-price').textContent = `${margartapizzaPrice} грн`;
        }
        
        return selectedPrice;
        
    }
    fillingSelect.addEventListener('change', selectionFilling);
    // =========== вибір начинки =========

    let checkboxForm = document.querySelectorAll('.toping-row input');
    let [...inputs] = checkboxForm;
    let toppingCard = document.querySelector('.topping-price');
    
    for (let value of inputs){
        value.addEventListener('change', (e)=>{if(value.checked){selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + 10} грн`;
         toppingCard.classList.replace('d-none','d-block')} else {selectedPrice.textContent = `${parseInt(selectedPrice.textContent) - 10} грн`; toppingCard.classList.replace('d-block','d-none')}})
    }
    // ============== Топінги ==============

    let deliveryRadio = document.querySelectorAll('.delivery-row input');
    let [...radios] = deliveryRadio;
    let deliveryCard = document.querySelector('.delivery-price');

    for (let inps of radios){
        inps.addEventListener('change', (e)=>{if(radios[0].checked){selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + 30} грн`;
        deliveryCard.classList.replace('d-none','d-block')} else {selectedPrice.textContent = `${parseInt(selectedPrice.textContent) - 30} грн`; deliveryCard.classList.replace('d-block','d-none')}})
    }
    // ================ доставка ==============

    let formAll = document.querySelector('form');
    let orderFieldset = document.querySelector('.check-form');
    formAll.addEventListener('change', function(){
        if (sizeSelect.selectedIndex != 0 && fillingSelect.selectedIndex != 0){
            orderFieldset.removeAttribute('disabled');
        }
    })
    // =============== кнопка ================

    let modalWindow = document.querySelector('.modale');
    let orderButton = document.querySelector('.order-button');
    let modalDialog = document.querySelector('.modal-contente');
    let closeButton = document.querySelector('.btn-secondary');

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

    orderButton.addEventListener('click', openModal);
    modalWindow.addEventListener('click', closeModal);

}