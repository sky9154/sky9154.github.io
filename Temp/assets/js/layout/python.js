//  Html Card
(() => {
    document.body.style.overflow="auto";    // 讓頁面保持可滾動狀態
    const pythoncard = [

    ];
    const pcard = document.getElementById("python-card");
    pythoncard.forEach(post => {
    pcard.innerHTML += `

    `;
    });
})();

// 文字效果
let textWrapper = document.querySelector(".title .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class="letter">$&</span>');

anime.timeline({loop: false})
.add({
    targets: ".title .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
})
.add({
    targets: ".title",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});