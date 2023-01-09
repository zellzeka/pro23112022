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

    class FilmClass{
        constructor(name, genre, year, views){
            this.name = name;
            this.genre = genre;
            this.year = year;
            this.views = views;
        }
        rating(){
            let ratingValue = Math.round(this.views / (new Date().getFullYear() - this.year));
            return ratingValue;
        }
    }
    let starwars = new FilmClass("Star Wars", "Fantasy", 1979, 3000);
    let aliens = new FilmClass("Aliens", "Fantasy", 1986, 2560);
    let batman = new FilmClass("Batman", "Action", 2022, 1540);

    const filmsColection = [starwars, aliens, batman];
    const [...films] = filmsColection;
    for (let {year} of filmsColection){
        console.log(year);
    }
    // ================= фільтр фільмів ============
}


