<?php
$html='';
$css='';
$html=$_POST['html'];
$css=$_POST['css'];
?>
<!DOCTYPE html>
<html lang='zh-TW'>
<head>
    <link rel="icon" type="image/x-icon" href="https://kiriqua.com/images/logo.png" />
    <link rel="shortcut icon" href="https://kiriqua.com/images/logo.png" type="image/x-icon" />
    <script src="https://kiriqua.com/js/reset.js"></script>
    <title>畫面預覽</title>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
</head>
<style><?php echo $css; ?></style>
<body onload="reset();">
<?php echo $html; ?>
</body>
</html>