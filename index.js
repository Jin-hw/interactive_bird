let _imgArr;
let bg;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.02;

window.onload = function() {
    _imgArr = document.getElementsByTagName("img");
    window.addEventListener("mousemove", mouseFunc, false);
    function mouseFunc(e){
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
        h1.innerHTML = x + " " + y;
    }
    loop();
}


function loop(){
    //console.log(x, y);
    mx += (x-mx) * speed;
    my += (y-my) * speed;
    
    _imgArr[0].style.transform = "translate(" + -(mx/15) + "px," + -(my/15) + "px)";
    _imgArr[1].style.transform = "translate(" + -(mx/13) + "px," + -(my/13) + "px)";
    _imgArr[2].style.transform = "translate(" + -(mx/10) + "px," + -(my/10) + "px)";
    _imgArr[3].style.transform = "translate(" + -(mx/8) + "px," + -(my/8) + "px)";
    _imgArr[4].style.transform = "translate(" + -(mx/6) + "px," + -(my/6) + "px)";
    _imgArr[5].style.transform = "translate(" + -(mx/4) + "px," + -(my/4) + "px)";
    _imgArr[6].style.transform = "translate(" + -(mx/2) + "px," + -(my/2) + "px)";
    window.requestAnimationFrame(loop);
}
