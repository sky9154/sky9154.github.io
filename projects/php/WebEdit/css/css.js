var code=""; //預覽
var copy=""; // 程式碼
var Class="";
// 文字css變數
var Height="",Width="",FontSize="",FontFamily="",Color="";
var Heights="",Widths="",FontSizes="",FontFamilys="",Colors="";
// 邊框css變數
var Bd="",BdStyle="",BdWidth="",BdRadius="",BdColor="";
var Bds="",BdStyles="",BdWidths="",BdRadiuss="",BdColors="";
// 背景css變數
var BgColor="",BgImage="";
var BgColors="",BgImages="";

var tab="&nbsp;&nbsp;&nbsp;&nbsp;";
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    $("#start").click(function(){
        if($('#Class').val()==""){alert("請輸入選擇器名稱");}
        else if($('#Class').val()!=""){Class=$('#Class').val()+"{<br>";}
        // 文字css
        if($('#Height').val()!=""){
            Height=tab+"height: "+$('#Height').val()+$('#Hunit').val()+";<br>";
            Heights=" height: "+$('#Height').val()+$('#Hunit').val()+";";
        };
        if($('#Width').val()!=""){
            Width=tab+"width: "+$('#Width').val()+$('#Wunit').val()+";<br>";
            Widths=" width: "+$('#Width').val()+$('#Wunit').val()+";";
        };
        if($('#FontSize').val()!=""){
            FontSize=tab+"font-size: "+$('#FontSize').val()+$('#Funit').val()+";<br>";
            FontSizes=" font-size: "+$('#FontSize').val()+$('#Funit').val()+";";
        };
        if($('#FontFamily').val()!=""){
            FontFamily=tab+"font-fanily: &quot;"+$('#FontFamily').val()+"&quot;;<br>";
            FontFamilys=" font-fanily: '"+$('#FontFamily').val()+"';";
        };
        if($('#Color').val()!=""){
            Color=tab+"color: "+$('#Color').val()+";<br>";
            Colors=" color: "+$('#Color').val()+";";
        };
        // 邊框css
        if($('#BdWidth').val()!=""&&$('#BdStyle').val()!=""&&$('#BdColor').val()!=""){
            Bd=tab+"border: "+$('#BdWidth').val()+$('#BWunit').val()+" "+$('#BdColor').val()+" "+$('#BdStyle').val()+";<br>";
            Bds=" border: "+$('#BdWidth').val()+$('#BWunit').val()+" "+$('#BdColor').val()+" "+$('#BdStyle').val()+";";
            BdWidth="",BdStyle="",BdColor="";
            BdWidths="",BdStyles="",BdColors="";
        }
        else if($('#BdWidth').val()==""||$('#BdStyle').val()==""||$('#BdColor').val()==""){
            BdStyle=tab+"border-style: "+$('#BdStyle').val()+";<br>";
            BdStyles=" border-style: "+$('#BdStyle').val()+";";
            if($('#BdWidth').val()!=""){
                BdWidth=tab+"border-width: "+$('#BdWidth').val()+$('#BWunit').val()+";<br>";
                BdWidths=" border-width: "+$('#BdWidth').val()+$('#BWunit').val()+";";
            };
            if($('#BdColor').val()!=""){
                BdColor=tab+"border-color: "+$('#BdColor').val()+";<br>";
                BdColors=" border-color: "+$('#BdColor').val()+";";
            };
        }
        if($('#BdRadius').val()!=""){
            BdRadius=tab+"border-radius: "+$('#BdRadius').val()+$('#BRunit').val()+";<br>";
            BdRadiuss=" border-radius: "+$('#BdRadius').val()+$('#BRunit').val()+";";
        };
        // 背景css變數
        if($('#BgColor').val()!=""){
            BgColor=tab+"background-color: "+$('#BgColor').val()+";<br>";
            BgColors=" background-color: "+$('#BgColor').val()+";";
        };
        if($('#BgImage').val()!=""){
            BgImage=tab+"background-image: url(&quot;"+$('#BgImage').val()+"&quot;);<br>";
            BgImages=" background-image: url('"+$('#BgImage').val()+"');";
        };
        copy=Class+Height+Width+BgColor+BgImage+Bd+BdStyle+BdWidth+BdRadius+BdColor+FontSize+FontFamily+Color+"}";
        if($('#Class').val()!=""){$("#copy").html(copy);}
        code=Heights+Widths+BgImages+BgColors+Bds+BdStyles+BdWidths+BdRadiuss+BdColors+FontSizes+FontFamilys+Colors;
        $("#gogo").val(code);
    });
});

document.getElementById('html').onclick=function(){
    location.href='../html';
};
document.getElementById('css').onclick=function(){
    window.location.reload(); 
};