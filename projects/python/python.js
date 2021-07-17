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
            introduction: "集各種功能為一身<br>可查詢漫畫、顯示當前熱門話題、播放歌曲......等等",
            github:"https://github.com/sky0966548546/DiscordBot"
        },
        {
            title: "Bad Apple Hololive ver",
            image: "images/badapple.png",
            introduction: "將Bad Apple Hololive ver逐幀轉為點字<br>並在cmd內播放出來",
            github: "https://github.com/sky0966548546/BadApple_Hololive_ver"
        },
        {
            title: "QRcode 產生器",
            image: "images/QRcode.png",
            introduction: "可將網址轉換成QRcode<br>並且與gif檔合併成可動的QRcode",
            github: "https://github.com/sky0966548546/GIFtoQRcode"
        },
        {
            title: "簡易網頁產生器",
            image: "images/SimpleHTML.png",
            introduction: "可快速新增一個專屬自己的網頁<br>只需輸入一些基本內容即可",
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