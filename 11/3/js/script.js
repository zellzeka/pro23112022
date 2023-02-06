window.onload =()=>{
    let submitBtn = document.querySelector('.btn');

    submitBtn.onclick= ()=>{
        let inputValue = document.querySelector('.form-control').value;
        let passwordPatern = /\d\d\d\d/;
        passwordPatern.test(inputValue)? alert('Пароль вірний'):alert('Пароль невірний');
    };
    
}