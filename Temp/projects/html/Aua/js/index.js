// 撥放 BGM
music = () => new Audio("./audio/bgm.mp3").play();
setInterval(music(), 60.5*60*1000);