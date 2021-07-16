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

//  PHP Card
function php(){
    const htmlcard = [
        {
            title: "網頁編輯器",
            image: "images/WebEdit.png",
            link: "./WebEdit",
            introduction: "選擇現有的元件加以編輯後<br>立即查看結果並保存程式碼",
            github:"https://github.com/sky0966548546/Aua"
        },
        {
            title: "網頁編輯器 Pro",
            image: "images/WebEditPro.png",
            link: "./WebEditPro",
            introduction: "在網頁上撰寫HTML及CSS<br>並且可及時查看結果",
            github: "https://github.com/sky0966548546/WebEditPro"
        },
    ];
    const hcard = document.getElementById('php-card');
    htmlcard.forEach((post) => {
    hcard.innerHTML += `
        <div class="col s12 m6 animate__animated animate__jackInTheBox">
            <div class="card">
                <div class="card-image">
                    <img src="${post.image}">
                    <span class="card-title light-blue-text text-accent-4" style="font-weight:bold;">${post.title}</span>
                </div>
                <div class="card-content">
                    <p>${post.introduction}</p>
                </div>
                <div class="card-action">
                    <a href="${post.link}">go to webpage</a>
                    <a href="${post.github}" class="purple-text text-accent-1">github</a>
                </div>
            </div>
        </div>
    `;
    });
};