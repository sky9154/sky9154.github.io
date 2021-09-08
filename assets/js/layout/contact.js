// Button
(() => {
    const Button = [
        {
            name: "FaceBook",
            icon: "ai-facebook-fill",
            link: "www.facebook.com/weii.0504/"
        },
        {
            name: "Instagram",
            icon: "ai-instagram-fill",
            link: "www.instagram.com/weii_0504/"
        },
        {
            name: "Twitter",
            icon: "ai-twitter-fill",
            link: "www.twitter.com/Magus_0504"
        },
        {
            name: "Bahamut",
            icon: "ai-game-controller",
            link: "home.gamer.com.tw/homeindex.php?owner=evan9154"
        },
        {
            name: "Github",
            icon: "ai-github-fill",
            link: "github.com/sky0966548546"
        },
        {
            name: "Discord",
            icon: "ai-discord-fill",
            link: "github.com/sky0966548546"
        },
    ];
    const link = document.getElementById("link");
    Button.forEach(post => {
    link.innerHTML += `
    <a href="https://${post.link}" target="_blank">
        <div class="col s6 m4 icon">
            <div class="card-panel center-align" id="${post.name}">
                <span><i class="${post.icon}"></i> ${post.name}</span>
            </div>
        </div>
    </a>
    `;
    });
})();

// plate initialization
$(".icon").plate({inverse: true});