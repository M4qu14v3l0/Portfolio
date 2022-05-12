var jazzOne = document.getElementById('music');
var icon = document.getElementById('icon-play');

icon.onclick = function(){
    if(jazzOne.paused){
        jazzOne.play();
        icon.className = "fa-solid fa-pause";
    }else{
        jazzOne.pause();
        icon.className = "fa-solid fa-play";
    }
}