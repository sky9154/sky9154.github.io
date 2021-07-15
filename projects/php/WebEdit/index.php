<?php
function a1(){
if (isset($_GET['mode'])) {
    return $_GET['mode'];
} else {
    return $name='html';;
}
}
$name=a1();
$print="";
$head="";
if($name=='html'){
    $head="
    <title>網頁元件產生器</title>
    <link rel='stylesheet' href='./css/html.css'/>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    <script src='./js/html.js'></script>
    <script src='https://kiriqua.com/js/reset.js'></script>";
    $print="
        <form name='form' id='form'>
            選擇元件：
            <Select id='tag'>
                <option value='h1'>大標題</option>
                <option value='h2'>中標題</option>
                <option value='h3'>小標題</option>
                <option value='p'>段落</option>
                <option value='div'>區塊容器</option>
                <option value='span'>行內容器</option>
                <option value='a'>連結</option>
            </Select><br>
            標籤內容：<input type='text' id='text' placeholder='輸入內容' /><br>
            指定ＩＤ：<input type='text' id='id' placeholder='輸入ID' /><br>
            字體顏色：<input type='text' id='color' placeholder='輸入顏色代碼' /><br>
            字體大小：<input type='text' id='size' placeholder='輸入字體大小' /><br>
            尺寸單位：
            <input type='radio' name='unit' value='px' />px
            <input type='radio' name='unit' value='%' />%
            <input type='radio' name='unit' value='pt' />pt
            <input type='radio' name='unit' value='cm' />cm<br>
            備註　　：<input type='text' id='title' placeholder='輸入元件備註'/><br>
            網址　　：<input type='url' id='url' placeholder='輸入網址'/><br><br>
            <input type='button' value='送出' id='start' title='確定嗎？不後悔嗎？' />
            <input type='reset' value='重置' title='哈哈！後悔了吧！' />
        </form><br>
        效果展示
        <hr>
        <p id='show'></p>
        <br>
        <br>
        程式碼
        <hr>
        <p id='copy' onclick='copy()'></p>
    ";
}
 elseif($name=='css'){
    $head="
    <title>CSS編輯器</title>
    <link href='./css/css.css' rel='stylesheet'>
    <script src='https://kiriqua.com/js/reset.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    <script src='./js/css.js'></script>";
 $print="
 <div class='left'>
<table for='css'>
    <form name='list'>
    <tbody>
        <tr>
            <td>.Class｛</td>
            <td><input type='text'id='Class' placeholder='輸入名稱' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='Height' />Height：</td>
            <td><input type='text' id='Heights' placeholder='輸入高度' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='Width'/>Width：</td>
            <td><input type='text' id='Widths' placeholder='輸入寬度' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='Color'/>Color：</td>
            <td><input type='text' id='Colors' placeholder='輸入字體顏色' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='FontFamily'/>Font-Family：</td>
            <td><input type='text' id='FontFamilys' placeholder='輸入字體' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='FontSize'/>Font-Size：</td>
            <td><input type='text' id='FontSizes' placeholder='輸入字體大小' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='BgColor'/>Bg-Color：</td>
            <td><input type='text' id='BgColors' placeholder='輸入背景顏色' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='BgImage'/>Bg-Image：</td>
            <td><input type='text' id='BgImages' placeholder='輸入背景圖片' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='BdStyle'/>Bd-Style：</td>
            <td><input type='text' id='BdStyles' placeholder='輸入邊框樣式' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='BdRadius'/>Bd-Radius：</td>
            <td><input type='text' id='BdRadiuss' placeholder='輸入邊框圓角' value=''/></td>
        </tr>
        <tr>
            <td><input type='checkbox' id='BdColor'/>Bd-Color：</td>
            <td><input type='text' id='BdColors' placeholder='輸入邊框顏色' value=''/></td>
        </tr>
        <tr>
            <td>}</td>
        </tr>
        <tr>
            <td>
            <input type='button' value='送出' id='start'/>
            <input type='reset' value='重置' title='哈哈！後悔了吧！' />
            </td>
        </tr>
    </tbody>
    </form>
</table>
<div>
    效果展示
    <hr style='background-color:black;'>
    <div class='show' id='show'></div>
</div>
</div>
<div class='right'>
    代碼展示
    <hr>
    <div class='code' ><div id='Code' onclick='copy()' ></div></div>
</div>";
 }
?>
<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
<link rel='icon' type='image/x-icon' href='https://kiriqua.com/images/logo.png' />
<link rel='shortcut icon' href='https://kiriqua.com/images/logo.png' type='image/x-icon' />
<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<link rel="stylesheet" href="style.css">
<?php echo $head;?>
<script src="name.js"></script>
</head>
<body onload='reset();'>
<form action="index.php" method="get">
  <button type="submit" id="html" name="mode" value="html" class="bttn-unite bttn-md bttn-warning"><i class="fab fa-html5"></i></button>
  <button type="submit"name="mode"  value="css" class="bttn-unite bttn-md bttn-primary"><i class="fab fa-css3-alt"></i></button>
</form>
<br>
<?php echo $print ?>
</body>
</html>