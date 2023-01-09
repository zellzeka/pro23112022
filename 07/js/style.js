window.onload = ()=>{
    let [...divs] = document.getElementsByTagName('div');
    divs.forEach(item=>{
        item.innerHTML = '<span>текст</span>'
    })

    let [...queryNav] = document.querySelectorAll('.main-menue li a');
    queryNav.forEach(item=>item.innerHTML = 'Пункт меню')

    let nthLi = document.querySelector('.popular-goods li:nth-child(2)');
    nthLi.innerHTML = 'Штори';

    let phoneTransform = document.querySelector('footer a');
    phoneTransform.innerHTML = '+38063 888 58 58';
    // ============= зміна тексту елементів ==========
    let liParent = document.querySelector(".selected");
    console.log(liParent.parentNode);
    // ========== пошук батьківського елемента =========


}


