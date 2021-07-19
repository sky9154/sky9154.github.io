//文字效果
var textWrapper = document.querySelector('.home .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.home .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
}).add({
    targets: '.home',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

//Home Card
function home(){
    const homecard = [
        {
            title: "About Me",
            image: "images/home.png",
            link: "./about",
            introduction: "關於我"
        },
        {
            title: "Skills",
            image: "images/skills.png",
            link: "./skills",
            introduction: "我學過的程式語言"
        },
        {
            title: "Projects",
            image: "images/projects.png",
            link: "./projects",
            introduction: "練習用的垃圾"
        },
        {
            title: "Tools",
            image: "images/tools.png",
            link: "./tools",
            introduction: "實用的工具及模組"
        },
        {
            title: "Explore",
            image: "images/explore.png",
            link: "#explore",
            introduction: "好用的網站"
        },
        {
            title: "Contact",
            image: "images/contact.png",
            link: "./contact",
            introduction: "更多連結"
        }
    ];
    const hcard = document.getElementById('home-card');
    homecard.forEach((post) => {
    hcard.innerHTML += `
    <div class="col s12 m4 fade-in3s animate__headShake animate__fast">
        <div class="card">
            <a href="${post.link}">
                <div class="card-image">
                    <img src="${post.image}">
                    <span class="card-title teal-text text-accent-3">${post.title}</span>
                </div>
            </a>
            <div class="card-content">
                <p>${post.introduction}</p>
            </div>
        </div>
    </div>
    `;
    });
};