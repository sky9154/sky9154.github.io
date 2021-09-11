// 左側導航欄
let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebars");
let sidebarBtn = document.querySelector(".fa-wheelchair-alt");
let show = document.getElementById("show");

for (var i = 0; i < arrow.length; i ++) {
    arrow[i].addEventListener("click", kirito => {
        let arrowParent = kirito.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

close = () => {
    sidebar.classList.toggle("close");
    document.body.classList.toggle("over");
    document.scrollingElement.scrollTop = 0;
}

// 點擊事件
sidebarBtn.addEventListener("click", close);
show.addEventListener("click", () => close);

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

setTimeout(() => document.getElementById("open_close").click(), 500);