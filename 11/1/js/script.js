window.onload =()=>{
    let customerString = prompt('введіть текст у нижньому або верхньому регістрі');

    function uppercaseCounter (string){
        let casePattern = /[А-ЯA-Z]/g;
        let uppercaseString = string.match(casePattern);
        if(casePattern.test(string)){
            console.log(`Кількість літер у високому регістрі ${uppercaseString.length}`);} else {console.log('у вашому тексті немає літер у високому регістрі')}
    }
    uppercaseCounter(customerString);

}