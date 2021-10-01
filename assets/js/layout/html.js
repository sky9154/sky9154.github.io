//  Html Card
(() => {
    document.body.style.overflow="auto";    // 讓頁面保持可滾動狀態
    const htmlcard = [
        {
            title: "夸黑測試平台",
            image: "aua.webp",
            link: "Aua",
            introduce: "你是夸寶嗎？<br>不是的話，就是夸黑囉！",
            github:"Aua"
        },
        {
            title: "Risu 語音包",
            image: "risu.webp",
            link: "Risu",
            introduce: "do~do~do~<br>滿滿的 Risu",
            github: "AyundaRisuSound"
        },
        {
            title: "漫畫搜尋工具",
            image: "findComic.webp",
            link: "FindComic",
            introduce: "藉由輸入或鼠標選取的文字來搜尋N網上的漫畫<br>並且含有各種實用的快捷鍵!!!",
            github: "FindComic"
        },
        {
            title: "猜數字遊戲",
            image: "guessNumber.webp",
            link: "GuessNumber",
            introduce: "一款真正的猜數字遊戲<br>讓你想起童年的回憶",
            github: "GuessNumber"
        },
        {
            title: "第三方登入系統",
            image: "socialLogin.webp",
            link: "SocialLogin",
            introduce: "普通的 Gmail 登入系統<br>利用 Firebase 來儲存登入的資料",
            github: "SocialLogin"
        },
        {
            title: "待辦清單",
            image: "todoList.webp",
            link: "TodoList",
            introduce: "利用純 JavaScrip 進行製作的待辦清單",
            github: "TodoList"
        }
    ];
    const hcard = document.getElementById("html-card");
    htmlcard.forEach(post => {
    hcard.innerHTML += `
        <div class="card-panel col s12">
            <img src="../assets/images/layout/html/${post.image}" class="col s12 m6">
            <div class="col s12 m6">
                <div class="introduce">
                    <p class="card-title">
                        ${post.title}
                        <a href="https://github.com/sky0966548546/${post.github}" class="purple-text text-accent-1" target="_blank"><i class="ai-github-fill right"></i></a>
                        <a href="../projects/html/${post.link}" target="_blank"><i class="ai-globe right"></i></a>
                    </p>
                    <p>${post.introduce}</p>
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