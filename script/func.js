let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


var title = document.getElementById('title');
document.getElementById('home').onclick=function(){
  document.title ='oF|Home';
  title.innerText='Home';
}

function about(){
  document.title ='oF|About';
  title.innerText='About';
}