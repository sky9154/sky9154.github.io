var output = "",code="";
$(document).ready(function(){
    var tag="",unit="",text="",id="",color="";
    code="",output = "";
    $("#start").click(function(){
        tag=$('#tag').val();
        unit=$('input:radio:checked[name="unit"]').val();

        if($("#text").val()!=""){text=$("#text").val()}
        else if($("#text").val()==""){text=""};

        if($("#id").val()!=""){id=" id='"+$("#id").val()+"'"}
        else if($("#id").val()==""){id=""};

        if($("#color").val()!=""){color="color:"+$("#color").val()+"; "}
        else if($("#color").val()==""){color=""};

        if($("#size").val()!=""){size="font-size:"+$("#size").val()+unit+";"}
        else if($("#size").val()==""){size=""};

        if($("#title").val()!=""){title=" title='"+$("#title").val()+"'"}
        else if($("#title").val()==""){title=""};

        if($("#url").val()!=""&&tag=="a"){url=" href='"+$("#url").val()+"'"}
        else if($("#url").val()==""&&tag!="a"){url=""};

        output="<"+tag+id+title+url+" style='"+color+size+"'>"+text+"</"+tag+">";
        code="&lt;"+tag+id+title+url+" style='"+color+size+"'&gt;"+text+"&lt;/"+tag+"&gt;";
        $("#show").html(output);
        $("#copy").html(code);
    });
});

function copy(){
    var str = document.getElementById("copy");
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy')
}