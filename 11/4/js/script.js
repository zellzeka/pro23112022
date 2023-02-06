window.onload=()=>{
    let submitButton = document.querySelector('.btn');

    submitButton.onclick = ()=>{
        let urlPattern = /^https:\/\/([\w-]+\.)+\w+\//;
        let customerUrl = document.querySelector('#exampleFormControlInput1').value;
        let finalUrl = customerUrl.match(urlPattern);
        console.log(finalUrl[0]);
    }
}