// 左側導航欄
let arrow = document.querySelector(".arrow");
let sidebar = document.querySelector(".sidebars");
let sidebarBtn = document.querySelector(".fa-wheelchair-alt");
let showMenu = document.getElementById("showMenu");
setTimeout(() => document.getElementById("open_close").click(), 500);

let close = () => {
    sidebar.classList.toggle("close");
    document.body.classList.toggle("over");
    document.scrollingElement.scrollTop = 0;
}

// 點擊事件
sidebarBtn.addEventListener("click", close);
arrow.addEventListener("click", kirito => kirito.target.parentElement.parentElement.classList.toggle("showMenu"));
showMenu.addEventListener("click", ()=>arrow.click())
// 右側導航欄
$(document).ready(() => {
    // Init Sidenav
    $(".sidenav").sidenav({
        edge: "right",
        draggable: true,
        preventScrolling: false
    });
    // Init Collapsible
    $(".collapsible").collapsible();
});