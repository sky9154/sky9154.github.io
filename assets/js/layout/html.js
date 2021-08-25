//  Html Card
(() => {
    const htmlcard = [
        {
            title: "夸黑測試平台",
            image: "aua.webp",
            link: "Aua",
            introduce: "你是夸寶嗎?<br>不是的話，就是夸黑囉！",
            github:"Aua"
        },
        {
            title: "Ayunda Risu 語音包",
            image: "risu.webp",
            link: "Risu",
            introduce: "do~do~do~<br>滿滿的 Risu",
            github: "AyundaRisuSound"
        },
        {
            title: "詩音時鐘",
            image: "clock.webp",
            link: "Clock",
            introduce: "時間就是金錢<br>這個時鐘可以提醒你時間的重要性",
            github: ""
        },
        {
            title: "猜數字遊戲",
            image: "number.webp",
            link: "Number",
            introduce: "一款真正的猜數字遊戲<br>讓你想起童年的回憶",
            github: "GuessNumber"
        },
    ];
    const hcard = document.getElementById("html-card");
    htmlcard.forEach(post => {
    hcard.innerHTML += `
        <div class="col s12 m6 xl4 animate__animated animate__jackInTheBox">
            <div class="card">
                <div class="card-image">
                    <img src="../assets/images/layout/html/${post.image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator name grey-text text-darken-4">
                        ${post.title}<i class="bx bx-dots-vertical-rounded right"></i>
                    </span>
                </div>
                <div class="card-reveal">
                    <span class="card-title name grey-text text-darken-4">
                        ${post.title}<i class="bx bx-x bx-md right"></i>
                    </span>
                    <p class="default">${post.introduce}</p>
                    <div class="card-action center-align">
                        <a href="../projects/html/${post.link}">webpage</a>
                        <a href="https://github.com/sky0966548546/${post.github}" class="purple-text text-accent-1">github</a>
                    </div>
                </div>
            </div>
        </div>
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