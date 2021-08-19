// 側邊導航欄
let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebars");
let sidebarBtn = document.querySelector(".fa-wheelchair-alt");

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

/* 點擊事件 */
sidebarBtn.addEventListener("click", () => close());

/* 側邊導航欄 */
$(document).ready(function () {
    // Init Sidenav
    $('.sidenav').sidenav({
        edge: 'right',
        draggable: true,
        preventScrolling: false
    });
    // Init Collapsible
    $('.collapsible').collapsible();
});