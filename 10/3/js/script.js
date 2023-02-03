window.onload=()=>{
    let rectangle = document.querySelector('.rectangle');

    window.onkeydown = (e)=>{
        let keycode = e.keyCode;
        switch(keycode){
            case 37:
                rectangle.style.left = `${rectangle.offsetLeft - 10}px`
                break;
            case 39:
                rectangle.style.left = `${rectangle.offsetLeft + 10}px`
                break;
            case 38:
                rectangle.style.top = `${rectangle.offsetTop - 10}px`
                break;
            case 40:
                rectangle.style.top = `${rectangle.offsetTop + 10}px`
                break;
        }  
    }


}
