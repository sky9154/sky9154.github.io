let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-game");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
//隱藏內容
function none(){
  document.getElementById('history-web').style.display='none';
}

var title = document.getElementById('title');
var logo = document.getElementById('logo');

//更改圖示
function c(bx){
  logo.removeAttribute("class");
  logo.classList.add("bx");
  logo.classList.add(bx);
  logo.classList.add("logo");
}

document.getElementById('home').onclick=function(){
  none();
  c('bx-home');
  document.title ='oF|Home';
  title.innerText='Home';
}

document.getElementById('about').onclick=function(){
  document.title ='oF|About';
  title.innerText='About Me';
}

document.getElementById('history').onclick=function(){
  none();
  document.title ='oF|History';
  title.innerText='History';
  c('bx-history');
  document.getElementById('history-web').style.display='block';
}