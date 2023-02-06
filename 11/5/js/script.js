window.onload=()=>{
    let confirmButton = document.querySelector('.btn');
    

    confirmButton.onclick = ()=>{
       let userInput = document.querySelector('#exampleFormControlInput1').value;
       let validationPattern =  /^[a-zA-Z0-9-_]+$/g;
       if (validationPattern.test(userInput)){
        alert('Юзернейм введено вірно');
       } else {
        alert('Юзернейм складається з латинських літер, цифр, дефісів та підкресленнь');
       }
    }
}