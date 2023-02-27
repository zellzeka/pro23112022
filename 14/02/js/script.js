window.onload = ()=>{
    let listContainer = document.querySelector('.list-group');
    let fragment = new DocumentFragment();

    async function dogsArray (){
        const dogs = await fetch('https://dog.ceo/api/breeds/list/all');
        const dogsJson = await dogs.json();
        const dogsList = dogsJson.message;
        return dogsList
    }
    
    dogsArray ().then(dogsList=>{
        function pageBuild (prop, index=""){
                let listRow = document.createElement("li");
                listRow.classList.add('row');
                let listItem = document.createElement("div");
                listItem.classList.add('list-group-item', 'list-group-item-action', 'col');
                listItem.innerText = `${index} ${prop}`;
                listRow.appendChild(listItem);
                let imageContainer = document.createElement("div");
                imageContainer.classList.add('d-none', 'col');  
                listRow.appendChild(imageContainer);
                let dogImage = document.createElement("img");
                imageContainer.appendChild(dogImage);
                fragment.appendChild(listRow);
                listContainer.appendChild(fragment);
        }
        
        for (let prop in dogsList){
            if (dogsList[prop].length === 0){
                pageBuild (prop);
            } else {
                for (let index of dogsList[prop]){
                    pageBuild (prop, index);
                }
            }
        }

        let [...dogElements] = document.querySelectorAll(".list-group-item");
        
        for (let value of dogElements){
            value.onclick = (e)=> {
                let clickItem = e.target.innerText.split(' ');
                let clickContainer = e.target.nextSibling;
                let clickImage = clickContainer.children[0];
                let breed;
                if(clickItem.length>1){
                    breed = `${clickItem[1]}/${clickItem[0]}`;
                } else {
                    breed =`${clickItem[0]}`;
                }

                fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                    .then((response) => response.json())
                    .then((result) => {
                        clickContainer.classList.toggle('d-none');
                        clickImage.setAttribute('src', result.message)
                        clickContainer.appendChild(clickImage);
                    })
            };
        }
            
            
        
        
        
        
    })
}