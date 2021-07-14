var text=[
    'AMEEEZZIINGGGG','arigatooo','bOi','bye','dododo',
    'ezpz','GAAAASSSSPPPPPP','ha','heee nani','heeewoo',
    'hewwrrrooo','hheeee','hooo','humu humu','mehehehe',
    'ngaaaa(1)','ngaaaa(2)','pimpipipim','prrt prrt prrtt','shaaaaa',
    'UYYEEEYYY','weeee','whistle','woop woop woop','yahooowww',
    'you got mail'
];
function btn(){
    var btn=document.getElementById("btn");
    var flag=0;
    for(var loop=0;loop<26;loop++){
        if(flag%5==0){btn.innerHTML+="<br><br>"};
        btn.innerHTML+="<button onclick='play(this);'style='cursor: pointer;' id='"+text[loop]+"'>"+text[loop]+"</button>&nbsp;"
        flag+=1;
    }
}
function play(id){
    var audio= new Audio("./mp3/"+id.id+".mp3");
    audio.play();
}