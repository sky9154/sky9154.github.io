document.getElementById('discord').onclick=function(){
    M.toast({html: '已複製DISCORD TAG'});
    const id=document.getElementById("id");
    window.getSelection().selectAllChildren(id);
    document.execCommand("Copy");
}