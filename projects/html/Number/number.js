var a=0;
var b=Math.floor(Math.random() * 101);
var c;
$(document).ready(function(){
    $("#bt1").click(function(){a=10*a+1; $("#a1").text(a);});
    $("#bt2").click(function(){a=10*a+2; $("#a1").text(a);});
    $("#bt3").click(function(){a=10*a+3; $("#a1").text(a);});
    $("#bt4").click(function(){a=10*a+4; $("#a1").text(a);});
    $("#bt5").click(function(){a=10*a+5; $("#a1").text(a);});
    $("#bt6").click(function(){a=10*a+6; $("#a1").text(a);});
    $("#bt7").click(function(){a=10*a+7; $("#a1").text(a);});
    $("#bt8").click(function(){a=10*a+8; $("#a1").text(a);});
    $("#bt9").click(function(){a=10*a+9; $("#a1").text(a);});
    $("#bt0").click(function(){a=10*a+0; $("#a1").text(a);});
    $("#btc").click(function(){a=0; $("#a1").text(a);});
    $("#btbk").click(function(){a=parseInt(a/10); $("#a1").text(a);});
    $("#bto").click(function(){
        if (a > b) {
            c="太大";
          $("#a1").text(c);
          $("#a1").css('color','red');
        }
        else if (a < b) {
            c="太小";
          $("#a1").text(c);
          $("#a1").css('color','green');
        }
        else if (a = b) {
            c="嘟嘟好";
          $("#a1").text(c);
        }
        a=0;
  });
  $("#btop").click(function(){
    $("#a2").text(b);
    $("#a2").css("color","red");
  });
  $("#btrp").click(function(){
    b=Math.floor(Math.random() * 101);
    $("#a1").text(a);
    $("#a2").html("<span id='a2'></span>");
  });
});