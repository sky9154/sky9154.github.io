$(document).ready(function(){
    $("#reset").click(function (){
        $("#html").val("");
        $("#css").val("");
    });
    $("#html-btn").click(function (){
        $("#html").show();
        $("#css").hide();
    });
    $("#css-btn").click(function (){
        $("#html").hide();
        $("#css").show();
    });
	$("#output").click(function(){
		$.post("./kirito.php",{
        html:$("#html").val(),
        css:$("#css").val()});
	});
});