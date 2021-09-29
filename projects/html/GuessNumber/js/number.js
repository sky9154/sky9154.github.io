let output = 0;
let ans = Math.floor(Math.random() * 101);
$(document).ready(() => {
    // 輸入答案
    $("#bt1").click(() => input(1));
    $("#bt2").click(() => input(2));
    $("#bt3").click(() => input(3));
    $("#bt4").click(() => input(4));
    $("#bt5").click(() => input(5));
    $("#bt6").click(() => input(6));
    $("#bt7").click(() => input(7));
    $("#bt8").click(() => input(8));
    $("#bt9").click(() => input(9));
    $("#bt0").click(() => input(0));
    $("#btc").click(() => other(0));
    $("#btbk").click(() => other(parseInt(output/10)));
    
    //判斷答案
    $("#bto").click(() => {
        if (output > ans) {
            $("#a1").text("太大");
            $("#a1").css("color", "#FF4D4D");
        }
        else if (output < ans) {
            $("#a1").text("太小");
            $("#a1").css("color", "green");
        }
        else if (output = ans) {
            $("#a1").text("嘟嘟好");
            $("#a1").css("color", "blue");
        }
        output = 0;
    });
    
    // 顯示答案
    $("#btop").click(() => {
        $("#a2").text(ans);
        $("#a2").css("color", "red");
    });

    // 重新開始
    $("#btrp").click(() => {
        ans = Math.floor(Math.random() * 101);
        other(0);
        $("#a2").text("");
    });

    // 回首頁
    $("#bthm").click(() => {
        window.location.replace("https://kiriqua.com");
    });
});

// 輸入答案
input = q => {
    $("#a1").css("color","black");
    output = 10 * output + q;
    $("#a1").text(output);
}

// 其他功能
other = decide => {
    output = decide;
    $("#a1").css("color","black");
    $("#a1").text(output);
}