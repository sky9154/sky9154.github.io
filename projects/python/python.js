// 文字效果
var textWrapper = document.querySelector('.title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.title .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
}).add({
    targets: '.title .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
delay: (el, i) => 150 + 25 * i
}).add({
    targets: '.title',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

//  Python Card
function python(){
    const htmlcard = [
        {
            title: "Discord 機器人",
            image: "images/discordbot.png",
            introduction: "集各種功能為一身，其實只是個集合型的工具箱<br>可查詢漫畫、顯示當前熱門話題、播放歌曲......等等",
            github:"https://github.com/sky0966548546/DiscordBot"
        },
        {
            title: "Bad Apple Hololive ver",
            image: "images/badapple.png",
            introduction: "CMD 不僅可以當命令列介面<br>甚至可以播放動畫！！！",
            github: "https://github.com/sky0966548546/BadApple_Hololive_ver"
        },
        {
            title: "QRcode 產生器",
            image: "images/QRcode.png",
            introduction: "可將網址轉換成 QRcode 並且將 gif 檔作為背景，<br>產生一個獨一無二且會動的 QRcode",
            github: "https://github.com/sky0966548546/GIFtoQRcode"
        },
        {
            title: "簡易網頁產生器",
            image: "images/SimpleHTML.png",
            introduction: "少少幾步驟<br>擁有一個專屬簡易的網頁",
            github: "https://github.com/sky0966548546/SimpleHTML"
        },
    ];
    const hcard = document.getElementById('html-card');
    htmlcard.forEach((post) => {
    hcard.innerHTML += `
        <div class="col s12 m6 animate__animated animate__jackInTheBox">
            <div class="card">
                <div class="card-image">
                    <img src="${post.image}">
                    <span class="card-title teal-text text-accent-3" style="font-weight:bold;">${post.title}</span>
                </div>
                <div class="card-content">
                    <p>${post.introduction}</p>
                </div>
                <div class="card-action">
                    <a href="${post.github}" class="purple-text text-accent-1">github</a>
                </div>
            </div>
        </div>
    `;
    });
};