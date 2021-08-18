// Home Card
(() => {
    const homecard = [
        {
            title: "About Me",
            image: "images/home/home.webp",
            link: "./about",
        },
        {
            title: "Skills",
            image: "images/home/skills.webp",
            link: "./skills",
        },
        {
            title: "Projects",
            image: "images/home/projects.webp",
            link: "./projects",
        },
        {
            title: "More Links",
            image: "images/home/contact.webp",
            link: "./contact",
        }
    ];
    const hcard = document.getElementById('home-card');
    homecard.forEach((post) => {
    hcard.innerHTML += `
    <div class="col s12 m6">
        <div class="card animate__animated animate__bounceIn">
            <a href="${post.link}">
                <div class="card-image">
                    <img src="${post.image}">
                    <span class="card-title teal-text text-accent-3">${post.title}</span>
                </div>
            </a>
        </div>
    </div>
    `;
    });
})();