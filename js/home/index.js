// Home Card
(() => {
    const homecard = [
        {
            title: "About Me",
            image: "images/home/home.webp",
            link: "./about",
            introduction: "關於我"
        },
        {
            title: "Skills",
            image: "images/home/skills.webp",
            link: "./skills",
            introduction: "我學過的程式語言"
        },
        {
            title: "Projects",
            image: "images/home/projects.webp",
            link: "./projects",
            introduction: "練習用的垃圾"
        },
        {
            title: "Tools",
            image: "images/home/tools.webp",
            link: "./tools",
            introduction: "實用的工具及模組"
        },
        {
            title: "Explore",
            image: "images/home/explore.webp",
            link: "./explore",
            introduction: "好用的網站"
        },
        {
            title: "Contact",
            image: "images/home/contact.webp",
            link: "./contact",
            introduction: "更多連結"
        }
    ];
    const hcard = document.getElementById('home-card');
    homecard.forEach((post) => {
    hcard.innerHTML += `
    <div class="col s12 m4">
        <div class="card animate__animated animate__bounceIn">
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
})();