/*
var countdown = $("#countdown").countdown360({
    radius      : 110,
    seconds     : 5,
    fontColor   :'#FFFFFF',
    autostart   :false,
    onComplete  :function () {
        $("#countdown").css("display","none");
        $(".main-content").css("filter","none");
    }
});

$("#btnStartGame").click(function (){

    alert("Game will Start!! Press OK");

    $(".first-frame").fadeOut(2000);

    countdown.start();
});*/

function tankMove(_canvas, _img, _distance, _height){
    const canvas = _canvas;
    const img = _img;

    canvas.width = _distance;
    canvas.height = _height;

    var c = canvas.getContext('2d');

    var x = _distance;

    function animate(){
        requestAnimationFrame(animate);

        c.clearRect(0,0, canvas.width, innerHeight);

        c.beginPath();
        c.arc(x,300,100, Math.PI * 2, false);
        c.drawImage(img,x-60,220,140,140);
        c.strokeStyle = "transparent";
        c.stroke();

        x--;
    }

    animate();
}

tankMove(document.getElementById("myTank-Area"),document.getElementById("myTank"),
    window.innerWidth + window.innerWidth/2,window.innerHeight);