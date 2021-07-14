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
            title: "夸黑測試平台",
            image: "images/aua.png",
            link: "./Aua",
            introduction: "你是夸寶嗎?<br>不是的話，就是夸黑囉！",
            github:"https://github.com/sky0966548546/Aua"
        },
        {
            title: "Ayunda Risu 語音包",
            image: "images/risu.png",
            link: "./Risu",
            introduction: "do~do~do~<br>滿滿的Risu",
            github: "https://github.com/sky0966548546/AyundaRisuSound"
        },
    ];
    const hcard = document.getElementById('php-card');
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
                    <a href="${post.link}">go to webpage</a>
                    <a href="${post.github}" class="purple-text text-accent-1">github</a>
                </div>
            </div>
        </div>
    `;
    });
};