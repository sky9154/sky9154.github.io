$(document).ready(function(){
    $("#start").click(function(){
        start();
        $("#yes").click(function(){yes();});
        $("#no").click(function(){no();});
    });
});


//有看Vtuber
function yes(){
    $("#Q").html("Q2.你是夸寶嗎？");
        $("#yes").click(function(){
            $("#Q").html("Q3.你能當阿夸專屬的煙灰缸嗎？");
                $("#yes").click(function(){
                    $("#Q").html("Q4.你出事也會Q走嗎？"); 
                        $("#yes").click(function(){
                            $("#Q").html("Q5.你是阿夸的中國人男友嗎？");
                                $("#yes").click(function(){uninterpreted();});
                                $("#no").click(function(){QED();});
                        });
                        $("#no").click(function(){QED();});
                });
                $("#no").click(function(){QED();});
        });
        $("#no").click(function(){QED();});
}


//沒有看Vtuber
function no(){
    $("#Q").html("Q2.你有玩APEX嗎？");
        $("#yes").click(function(){
            $("#Q").html("Q3.你出事會Q走嗎？");
                $("#yes").click(function(){
                    $("#Q").html("Q4.你會抽菸嗎？");
                        $("#yes").click(function(){QED();});
                        $("#no").click(function(){
                            $("#Q").html("Q5.你喜歡中國小粉紅嗎？");
                                $("#yes").show();
                                $("#no").show();
                                $("#yes").click(function(){china();});
                                $("#no").click(function(){QED();}); 
                        });
                });
                $("#no").click(function(){QED();});
        });
        $("#no").click(function(){
            $("#Q").html("Q3.你會排擠朋友嗎？");
                $("#yes").click(function(){
                    $("#Q").html("Q4.你是社恐嗎？");
                        $("#yes").click(function(){pathetic();});
                        $("#no").click(function(){QED();});
                });
                $("#no").click(function(){QED();});
        });
}


//測驗開始
function start(){
    $("#title1").hide();
    $("#title2").hide();
    $("#start").hide();
    $("#yes").show();
    $("#no").show();
    $("#Q").show();
    $("#Q").html("Q1.你有看Vtuber嗎？");
}


//夸黑確定
function QED(){
    $("#Q").html("<br>Q.E.D.<br>你是夸黑");
    $("#yes").hide();
    $("#no").hide();
}


//沒救的腦殘粉
function uninterpreted(){
    $("#Q").html("<br>Q.E.D.<br>腦殘粉跟夸黑沒兩樣");
    $("#yes").hide();
    $("#no").hide();
}


//沒救的腦殘
function china(){
    $("#Q").html("<br>Q.E.D.<br>耖你媽，滾回你的祖國啦！");
    $("#yes").hide();
    $("#no").hide();
}


//低能社恐
function pathetic(){
    $("#Q").html("<br>Q.E.D.<br>社恐還敢排擠朋友，低能是不是？<br>你是不是還要說我有憂鬱症？");
    $("#yes").hide();
    $("#no").hide();
}