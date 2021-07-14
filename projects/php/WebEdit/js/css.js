var code="",Class="",Height="",Width="",Color="",
FontFamily="",FontSize="",BgColor="",BgImage="",BdStyle="",
BdRadius="",BdColor="",p="";
$(document).ready(function(){
    $("#start").click(function(){
    code="",Class="",Height="",Width="",Color="",
    FontFamily="",FontSize="",BgColor="",BgImage="",BdStyle="",
    BdRadius="",BdColor="",p;
    if($("#Class").val()==""){alert("class必須輸入內容")}
    else{Class="."+$("#Class").val()+"{";
    if($("#Height").prop("checked")){Height="height:"+$("#Heights").val()+";";}
    if($("#Width").prop("checked")){Width="width:"+$("#Widths").val()+";";}
    if($("#Color").prop("checked")){Color="color:"+$("#Colors").val()+";";}
    if($("#FontFamily").prop("checked")){FontFamily="font-family:"+$("#FontFamilys").val()+";";}
    if($("#FontSize").prop("checked")){FontSize="font-size:"+$("#FontSizes").val()+";";}
    if($("#BgColor").prop("checked")){BgColor="background-color:"+$("#BgColors").val()+";";}
    if($("#BgImage").prop("checked")){BgImage="background-image:url("+$("#BgImages").val()+");";}
    if($("#BdStyle").prop("checked")){BdStyle="border-style:"+$("#BdStyles").val()+";";}
    if($("#BdRadius").prop("checked")){BdRadius="border-radius:"+$("#BdRadiuss").val()+";";}
    if($("#BdColor").prop("checked")){BdColor="border-color:"+$("#BdColors").val()+";";}
    code=Height+Width+Color+FontFamily+FontSize+BgColor+BgImage+BdStyle+BdRadius+BdColor;
    p="<p style='text-indent:-2em;'>}</p>";
    $("#show").html("<div style='"+code+"'>測試test</div>");
    if($("#Height").prop("checked")){Height="<br>"+"height:"+$("#Heights").val()+";";}
    if($("#Width").prop("checked")){Width="<br>"+"width:"+$("#Widths").val()+";";}
    if($("#Color").prop("checked")){Color="<br>"+"color:"+$("#Colors").val()+";";}
    if($("#FontFamily").prop("checked")){FontFamily="<br>"+"font-family:"+$("#FontFamilys").val()+";";}
    if($("#FontSize").prop("checked")){FontSize="<br>"+"font-size:"+$("#FontSizes").val()+";";}
    if($("#BgColor").prop("checked")){BgColor="<br>"+"background-color:"+$("#BgColors").val()+";";}
    if($("#BgImage").prop("checked")){BgImage="<br>"+"background-image:url("+$("#BgImages").val()+");";}
    if($("#BdStyle").prop("checked")){BdStyle="<br>"+"border-style:"+$("#BdStyles").val()+";";}
    if($("#BdRadius").prop("checked")){BdRadius="<br>"+"border-radius:"+$("#BdRadiuss").val()+";";}
    if($("#BdColor").prop("checked")){BdColor="<br>"+"border-color:"+$("#BdColors").val()+";";}
    code=Class+Height+Width+Color+FontFamily+FontSize+BgColor+BgImage+BdStyle+BdRadius+BdColor+p;
    document.getElementById("Code").innerHTML=code;
    }
    });
});
function copy(){
    var str = document.getElementById("Code");
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy')
}