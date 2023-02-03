window.onload = ()=>{
    let customForm = document.querySelector('form');
    let [...inputs] = customForm.elements;
    customForm.onsubmit = function (e){
        let isValid = true;
        let formPassword = document.querySelector('input[name="password"]');
        let formConfirmPassword = document.querySelector('input[name="confirm-password"]');
        for(let element of inputs){
            if(element.value.length === 0){
                isValid = false;
            }
            if(formPassword.value !== formConfirmPassword.value){
                isValid = false;
                alert('Введіть вірний пароль');
                console.log(formPassword.value);
                break;
            }
            if(!isValid){
                e.preventDefault();
                alert('Всі поля повині бути заповнені');
                break;
            }
        }
    }

        
  
    
}