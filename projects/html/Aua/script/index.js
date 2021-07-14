function play(){
    var audio= new Audio('./assets/audio/bgm.mp3');
    audio.play();
}
setInterval("play();",60.5*60*1000);