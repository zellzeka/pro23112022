window.onload=()=>{
    let cardsContainer = document.querySelector('.container');
    let fragment = new DocumentFragment();
    
    let xhr = new XMLHttpRequest();
    xhr.open('get', "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function(){ 
        if (xhr.status != 200){
            alert(`${xhr.statusText}`);
        }  else {
            let serverData = xhr.response;
            setResult(serverData);
            clickHandler();
            
        } 
    }
    xhr.responseType = 'json';
    xhr.send(null);

    function setResult (res){
        for (let index of res){
            let column = document.createElement('div');
            column.classList.add('col-sm-5', 'm-3');
            fragment.appendChild(column);
            let card = document.createElement('div');
            card.classList.add('card');
            column.appendChild(card);
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);
            for (let value in index){
                if((value == 'address') || (value == 'company')){
                    continue
                } else {
                    let dataContainer = document.createElement('h5');
                    dataContainer.classList.add('card-title');
                    dataContainer.innerText = `${value} ${index[value]}`;
                    cardBody.appendChild(dataContainer);
                }
                
            }
            let button = document.createElement('a');
            button.classList.add('btn', 'btn-primary');
            button.innerText = 'Select';
            cardBody.appendChild(button);
        }
        cardsContainer.appendChild(fragment);
        
        return;
    }
    let count = 0;
    function clickHandler (){
        let [...btns] = document.querySelectorAll('.card-body .btn');
        for(let btn of btns){
            btn.onclick = function(){
                let currentObject = btn.parentNode;
                let currentId = currentObject.firstChild.textContent;
                let idNumber = currentId.split(' ').splice(1,1);
                localStorage.setItem('id', `${idNumber}`);
                localStorage.count = ++count;
                console.log (idNumber);
            }
        }
        
    }
}