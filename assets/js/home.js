// Home Card
(() => {
    const homecard = [
        {
            title: "About Me",
            image: "about.webp",
            link: "about.html"
        },
        {
            title: "Skills",
            image: "skills.webp",
            link: "skills.html"
        },
        {
            title: "Projects",
            image: "projects.webp",
            link: "html.html"
        },
        {
            title: "Contact Me",
            image: "contact.webp",
            link: "contact.html"
        }
    ];
    const hcard = document.getElementById("home-card");
    homecard.forEach(post => {
    hcard.innerHTML += `
    <div class="col s12 m6">
        <div class="card animate__animated animate__bounceIn">
            <a href="./layout/${post.link}">
                <div class="card-image">
                    <img src="./assets/images/home/${post.image}">
                    <span class="card-title teal-text text-accent-3">${post.title}</span>
                </div>
            </a>
        </div>
    </div>
    `;
    });
})();

// 文字效果
let textWrapper = document.querySelector(".home .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class="letter">$&</span>');

anime.timeline({loop: false})
.add({
    targets: ".home .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
})
.add({
    targets: ".home",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});