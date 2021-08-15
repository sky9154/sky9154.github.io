// 側邊導航欄
let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-game");

for (var i = 0; i < arrow.length; i ++) {
    arrow[i].addEventListener("click", kirito => {
        let arrowParent = kirito.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

// sidebarBtn.addEventListener("click", () => sidebar.classList.toggle("close"));

// // 文字效果
// let textWrapper = document.querySelector(".home .letters");
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
// .add({
//     targets: ".home .letter",
//     scale: [0, 1],
//     duration: 1500,
//     elasticity: 600,
//     delay: (el, i) => 45 * (i+1)
// })
// .add({
//     targets: ".home",
//     opacity: 1,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });