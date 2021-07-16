$(document).ready(function(){
    $('select').formSelect();
    $('.fixed-action-btn').floatingActionButton();
    var output = "",code="";
    var tag="",text="",texts="",id="",ids="",
    color="",code="",output = "",style="",styles="",
    title="",titles="";
    $("#start").click(function(){
        tag=$('#tag').val();
        if($("#text").val()!=""){text=$("#text").val()}
        else if($("#text").val()==""){text=""};

        if($("#id").val()!=""){id=" id='"+$("#id").val()+"'";ids=" id=&quot;"+$("#id").val()+"&quot;"}
        else if($("#id").val()==""){id=""};

        if($("#color").val()!=""){color="color: "+$("#color").val()+"; "}
        else if($("#color").val()==""){color=""};

        if($("#size").val()!=""){size="font-size: "+$("#size").val()+$("#unit").val()+";"}
        else if($("#size").val()==""){size=""};

        if($("#title").val()!=""){title=" title='"+$("#title").val()+"'";titles=" title=&quot;"+$("#title").val()+"&quot;"}
        else if($("#title").val()==""){title=""};

        if($("#url").val()!=""&&tag=="a"){url=" href='"+$("#url").val()+"'"}
        else if($("#url").val()==""&&tag!="a"){url=""};
        texts=text;
        if($("#size").val()!=""||$("#color").val()!=""){style=" style='";styles=" style=&quot;";text="'>"+text;texts="&quot;&gt;"+texts}
        else if($("#size").val()==""&&$("#color").val()==""){style="";styles="";text=">"+text;texts="&gt;"+texts}
        output="<"+tag+id+title+url+style+color+size+text+"</"+tag+">";
        code="&lt;"+tag+ids+titles+url+styles+color+size+texts+"&lt;/"+tag+"&gt;";
        $("#show").html(output);
        $("#copy").html(code);
    });
});

document.getElementById('copy').onclick=function(){
    M.toast({html: "已複製程式碼"});
    var str = document.getElementById("copy");
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy')
}

document.getElementById('html').onclick=function(){
    window.location.reload(); 
}
document.getElementById('css').onclick=function(){
    location.href='../css';
}
