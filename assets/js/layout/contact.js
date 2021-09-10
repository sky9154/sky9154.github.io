// Button
(() => {
    document.querySelector(".valign-wrapper").style.height = "100%";
    const Button = [
        {
            name: "FaceBook",
            icon: "ai-facebook-fill",
            link: "www.facebook.com/weii.0504/",
        },
        {
            name: "Instagram",
            icon: "ai-instagram-fill",
            link: "www.instagram.com/weii_0504/",
        },
        {
            name: "Twitter",
            icon: "ai-twitter-fill",
            link: "www.twitter.com/Magus_0504",
        },
        {
            name: "Bahamut",
            icon: "ai-game-controller",
            link: "home.gamer.com.tw/homeindex.php?owner=evan9154",
        },
        {
            name: "Github",
            icon: "ai-github-fill",
            link: "github.com/sky0966548546",
        },
        {
            name: "Discord",
            icon: "ai-discord-fill",
            link: "Discord ID",
        },
    ];
    const link = document.getElementById("link");
    Button.forEach(post => {
    link.innerHTML += `
    <a href="https://${post.link}" target="_blank" class="animate__animated animate__fadeIn" id="${post.name}s">
        <div class="col s6 m4 icon">
            <div class="card-panel center-align" id="${post.name}">
                <span><i class="${post.icon}"></i> ${post.name}</span>
            </div>
        </div>
    </a>
    `;
    });

    // 複製 ID
    copy = () => {
        M.toast({html: "已複製 DISCORD TAG"});
        navigator.clipboard.writeText(document.getElementById("id").ariaValueText);
    }
    
    // 移除 href 以及 target
    const Discords = document.getElementById("Discords");
    Discords.removeAttribute("href");
    Discords.removeAttribute("target");

    document.getElementById("Discord").addEventListener("click", copy);
})();

// plate initialization
$(".icon").plate({inverse: true});