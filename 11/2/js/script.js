window.onload=()=>{
    let digiText = prompt('Введіть текст разом з цифрами');

    function wordReplace (text){
        let digitPatern = /[^0-9]/g;
        let finalString = parseFloat(text.replace(digitPatern, ''));
        return finalString;
    }

    wordReplace(digiText);
}