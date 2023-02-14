window.onload=()=>{
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    function drawCircle (){
        context.beginPath();
        context.arc(250,250,150,0,Math.PI*2);
        context.closePath();
        context.strokeStyle = "red";
        context.stroke();
        drawText ();
    }
    drawCircle();

    function drawText (){
            context.font = "30px Arial";
            context.strokeText("Hello Canvas!", 150, 260);

        }
}