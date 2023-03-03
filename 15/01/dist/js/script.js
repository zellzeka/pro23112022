window.onload = () => {
  let sizeSelect = document.querySelector('#inputGroupSelect01');
  let bigSize = document.querySelector('.bigpizza');
  let mediumSize = document.querySelector('.mediumpizza');
  let smallSize = document.querySelector('.smallpizza');
  let bigSizePrice = Number(document.querySelector('.big-size-price').textContent.split(' ').shift());
  let mediumSizePrice = Number(document.querySelector('.medium-size-price').textContent.split(' ').shift());
  let smallSizePrice = Number(document.querySelector('.small-size-price').textContent.split(' ').shift());
  let selectedPrice = document.querySelector('.selected-price-title');
  selectedPrice.textContent = 0;

  function selectionSize(e) {
    let sizeValue = e.target.value;
    sizeSelect.setAttribute('disabled', '');

    function sizePattern(shown, hide1, hide2, price) {
      shown.classList.replace('d-none', 'd-block');
      hide1.classList.replace('d-block', 'd-none');
      hide2.classList.replace('d-block', 'd-none');
      selectedPrice.textContent = `${price} грн`;
    }
    if (sizeValue == 1) {
      sizePattern(bigSize, mediumSize, smallSize, bigSizePrice);
    } else if (sizeValue == 2) {
      sizePattern(mediumSize, bigSize, smallSize, mediumSizePrice);
    } else if (sizeValue == 3) {
      sizePattern(smallSize, bigSize, mediumSize, smallSizePrice);
    }
    return selectedPrice;
  }
  sizeSelect.addEventListener('change', selectionSize);
  // ==========вибір розміру ===========

  let fillingSelect = document.querySelector('#inputGroupSelect02');
  let meatpizzaCard = document.querySelector('.meatpizza');
  let chiesepizzaCard = document.querySelector('.chiesepizza');
  let hawaianpizzaCard = document.querySelector('.hawaianpizza');
  let margartapizzaCard = document.querySelector('.margartapizza');
  let meatpizzaPrice = 200;
  let chiesepizzaPrce = 170;
  let hawaianpizzaPrice = 160;
  let margartapizzaPrice = 150;

  function selectionFilling(e) {
    let fillingValue = e.target.value;
    fillingSelect.setAttribute('disabled', '');

    function fillingPattern(meat, chise, hawai, margo, price) {
      meat.classList.replace('d-none', 'd-block');
      chise.classList.replace('d-block', 'd-none');
      hawai.classList.replace('d-block', 'd-none');
      margo.classList.replace('d-block', 'd-none');
      selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + price} грн`;
      document.querySelector('.meatpizza-price').textContent = `${price} грн`;
    }
    if (fillingValue == 1) {
      fillingPattern(meatpizzaCard, chiesepizzaCard, hawaianpizzaCard, margartapizzaCard, meatpizzaPrice);

    } else if (fillingValue == 2) {
      fillingPattern(chiesepizzaCard, meatpizzaCard, hawaianpizzaCard, margartapizzaCard, chiesepizzaPrce);

    } else if (fillingValue == 3) {
      fillingPattern(hawaianpizzaCard, chiesepizzaCard, meatpizzaCard, margartapizzaCard, hawaianpizzaPrice);
    } else if (fillingValue == 4) {
      fillingPattern(margartapizzaCard, hawaianpizzaCard, chiesepizzaCard, meatpizzaCard, margartapizzaPrice);
    }

    return selectedPrice;

  }
  fillingSelect.addEventListener('change', selectionFilling);
  // =========== вибір начинки =========

  let checkboxForm = document.querySelectorAll('.toping-row input');
  let [...inputs] = checkboxForm;
  let toppingCard = document.querySelector('.topping-price');

  for (let value of inputs) {
    value.addEventListener('change', (e) => {
      if (value.checked) {
        selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + 10} грн`;
        toppingCard.classList.replace('d-none', 'd-block')
      } else {
        selectedPrice.textContent = `${parseInt(selectedPrice.textContent) - 10} грн`;
        toppingCard.classList.replace('d-block', 'd-none')
      }
    })
  }
  // ============== Топінги ==============

  let deliveryRadio = document.querySelectorAll('.delivery-row input');
  let [...radios] = deliveryRadio;
  let deliveryCard = document.querySelector('.delivery-price');

  for (let inps of radios) {
    inps.addEventListener('change', (e) => {
      if (radios[0].checked) {
        selectedPrice.textContent = `${parseInt(selectedPrice.textContent) + 30} грн`;
        deliveryCard.classList.replace('d-none', 'd-block')
      } else {
        selectedPrice.textContent = `${parseInt(selectedPrice.textContent) - 30} грн`;
        deliveryCard.classList.replace('d-block', 'd-none')
      }
    })
  }
  // ================ доставка ==============

  let formAll = document.querySelector('form');
  let orderFieldset = document.querySelector('.check-form');
  formAll.addEventListener('change', function() {
    if (sizeSelect.selectedIndex != 0 && fillingSelect.selectedIndex != 0) {
      orderFieldset.removeAttribute('disabled');
    }
  })
  // =============== кнопка ================

  let modalWindow = document.querySelector('.modale');
  let orderButton = document.querySelector('.order-button');
  let modalDialog = document.querySelector('.modal-contente');
  let closeButton = document.querySelector('.btn-secondary');

  function openModal() {
    modalWindow.className += " modale--active";

    let modalWidth = modalDialog.clientWidth;
    let modalHeight = modalDialog.clientHeight;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    modalDialog.setAttribute('style', `top:${windowHeight/2-modalHeight/2}px; left:${windowWidth/2-modalWidth/2}px;`);

  }

  function closeModal(event) {
    if ((event.target == modalWindow) || (event.target == closeButton)) {
      modalWindow.classList.remove('modale--active');
      modalDialog.setAttribute('aria-hidden', 'true');
    } else {
      event.stopPropagation();
    }

  }

  orderButton.addEventListener('click', openModal);
  modalWindow.addEventListener('click', closeModal);

}