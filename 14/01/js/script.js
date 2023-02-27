window.onload = () => {
    let cardsContainer = document.querySelector(".cards-container");
    let fragment = new DocumentFragment();
    let diametrButton = document.querySelector(".diameter");
    let populationButton = document.querySelector(".population");
    let planetArr = '';

    function pageBuild (arrey){
        for (let val of arrey) {
            let card = document.createElement("div");
            card.classList.add("card", "mb-5");
            fragment.appendChild(card);
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            card.appendChild(cardBody);
            for (let prop in val) {
                if (prop == "residents" || prop == "films") {
                    continue;
                } else {
                    let dataContainer = document.createElement("h6");
                    dataContainer.classList.add("card-title");
                    dataContainer.innerText = `${prop} ${val[prop]}`;
                    cardBody.appendChild(dataContainer);
                }
            }
            cardsContainer.appendChild(fragment);
        }
    }
    let [...buttons] = document.querySelectorAll('button');    
    for (let value of buttons){
        value.addEventListener('click', (e)=>{
            let [...cards] = document.querySelectorAll('.card');
            cards.forEach(element => {
                element.remove();
            });
            if(e.target === diametrButton){
                let filtered = planetArr.slice().sort((a, b) => a.diameter - b.diameter);
                pageBuild(filtered);
            }
            if (e.target === populationButton){
                let filtered = planetArr.slice().sort((a, b) => a.population - b.population);
                pageBuild(filtered);
            }
        })
    }


    fetch("https://swapi.dev/api/planets")
        .then((response) => {
        let result = response.json();
        return result;
        })
        .then((result) => {
        planetArr = result.results;
        pageBuild(planetArr);
        cardsContainer.appendChild(fragment);
        return planetArr;
        })
        .catch(error => console.log(error));
        
};
