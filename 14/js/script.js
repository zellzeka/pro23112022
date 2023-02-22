window.onload = () => {
  let mainContainer =  document.querySelector(".container");
  let cardsContainer = document.querySelector(".cards-container");
  let fragment = new DocumentFragment();
  let diametrButton = document.querySelector(".diameter");
  let populationButton = document.querySelector(".population");

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
    function clickHandler (filter){
        let [...cards] = document.querySelectorAll('.card');
        cards.forEach(element => {
            element.remove();
        });
        pageBuild(filter);
        return;
    }



  fetch("https://swapi.dev/api/planets")
    .then((response) => {
        let result = response.json();
        return result;
    })
    .then((result) => {
        let planetArr = result.results;
        pageBuild(planetArr);
        cardsContainer.appendChild(fragment);
        return planetArr;
    })
    .then((planetArr) => {
        let [...buttons] = document.querySelectorAll('button');
        for (let value of buttons){
            value.addEventListener('click', (e)=>{
                if(e.target === diametrButton){
                   let diameterFiltered = planetArr.sort((a, b) => a.diameter - b.diameter); 
                   clickHandler(diameterFiltered);
                }
                if (e.target === populationButton){
                    let populationFiltered = planetArr.sort((a, b) => a.population - b.population);
                    clickHandler(populationFiltered);
                }
            })
        }

    });
};
