var text = [
    "AMEZING","arigato","bOi","bye","dododo",
    "ezpz","GASP","ha","heee nani","heeewoo",
    "hewwrrrooo","hheeee","hooo","humu humu","mehehehe",
    "ngaaaa(1)","ngaaaa(2)","pimpipipim","prrt prrt prrtt","shaaaaa",
    "UYYEEEYYY","weeee","whistle","woop woop woop","yahooowww",
    "you got mail"
];
(() => {
    let btn = document.getElementById("btn");
    let flag = 0;
    for(let loop = 0; loop < text.length; loop ++) {
        if(flag%5==0){btn.innerHTML+="<br><br>"};
        btn.innerHTML+='<button onclick="play(this);" style="cursor: pointer;" id="'+text[loop]+">"+text[loop]+"</button>&nbsp;"
        flag+=1;
    }
})();

function play(id){
    var audio= new Audio("./audio/"+id.id+".mp3");
    audio.play();
}