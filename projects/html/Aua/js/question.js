$(document).ready(() => {
    $("#start").click(() => {
        start();
        $("#yes").click(() => yes());
        $("#no").click(() => no());
    });
    $("#end").click(() => window.location.reload());
});

// 有看Vtuber
yes = () => {
    $("#Q").html("Q2.你是夸寶嗎？");
        $("#yes").click(() => {
            $("#Q").html("Q3.你能當阿夸專屬的煙灰缸嗎？");
                $("#yes").click(() => {
                    $("#Q").html("Q4.你出事也會 Q 走嗎？"); 
                        $("#yes").click(() => {
                            $("#Q").html("Q5.你是阿夸的中國人男友嗎？");
                                $("#yes").click(() => uninterpreted());
                                $("#no").click(() => QED());
                        });
                        $("#no").click(() => QED());
                });
                $("#no").click(() => QED());
        });
        $("#no").click(() => QED());
}

// 沒有看Vtuber
no = () => {
    $("#Q").html("Q2.你有玩 APEX 嗎？");
        $("#yes").click(() => {
            $("#Q").html("Q3.你出事會 Q 走嗎？");
                $("#yes").click(() => {
                    $("#Q").html("Q4.你會抽菸嗎？");
                        $("#yes").click(() => QED());
                        $("#no").click(() => {
                            $("#Q").html("Q5.你喜歡中國小粉紅嗎？");
                                $("#yes").show();
                                $("#no").show();
                                $("#yes").click(() => china());
                                $("#no").click(() => QED()); 
                        });
                });
                $("#no").click(() => QED());
        });
        $("#no").click(() => {
            $("#Q").html("Q3.你會排擠朋友嗎？");
                $("#yes").click(() => {
                    $("#Q").html("Q4.你是社恐嗎？");
                        $("#yes").click(() => pathetic());
                        $("#no").click(() => QED());
                });
                $("#no").click(() => QED());
        });
}

// 測驗開始
start = () => {
    $("#title1").hide();
    $("#title2").hide();
    $("#start").hide();
    $("#yes").show();
    $("#no").show();
    $("#Q").show();
    $("#Q").html("Q1.你有看 Vtuber 嗎？");
}

// 夸黑確定
QED = () => {
    $("#Q").html("<br>Q.E.D.<br>你是夸黑");
    $("#yes").hide();
    $("#no").hide();
    $("#end").show();
}

// 沒救的腦殘粉
uninterpreted = () => {
    $("#Q").html("<br>Q.E.D.<br>腦殘粉跟夸黑沒兩樣");
    $("#yes").hide();
    $("#no").hide();
    $("#end").show();
}

// 沒救的腦殘
china = () => {
    $("#Q").html("<br>Q.E.D.<br>耖你媽，滾回你的祖國啦！");
    $("#yes").hide();
    $("#no").hide();
    $("#end").show();
}


// 低能社恐
pathetic = () => {
    $("#Q").html("<br>Q.E.D.<br>社恐還敢排擠朋友，低能是不是？<br>你是不是還要說我有憂鬱症？");
    $("#yes").hide();
    $("#no").hide();
    $("#end").show();
}