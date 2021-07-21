document.getElementById('copy').onclick=function(){
    M.toast({html: "已複製程式碼"});
    var str = document.getElementById("copy");
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy')
}