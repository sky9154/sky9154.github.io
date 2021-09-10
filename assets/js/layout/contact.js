// Button
(() => {
    document.querySelector(".valign-wrapper").style.height = "100%";
    const Button = [
        {
            name: "FaceBook",
            icon: "ai-facebook-fill",
            link: "https://www.facebook.com/weii.0504/",
            target: "_blank"
        },
        {
            name: "Instagram",
            icon: "ai-instagram-fill",
            link: "https://www.instagram.com/weii_0504/",
            target: "_blank"
        },
        {
            name: "Twitter",
            icon: "ai-twitter-fill",
            link: "https://www.twitter.com/Magus_0504",
            target: "_blank"
        },
        {
            name: "Bahamut",
            icon: "ai-game-controller",
            link: "https://home.gamer.com.tw/homeindex.php?owner=evan9154",
            target: "_blank"
        },
        {
            name: "Github",
            icon: "ai-github-fill",
            link: "https://github.com/sky0966548546",
            target: "_blank"
        },
        {
            name: "Discord",
            icon: "ai-discord-fill",
            link: "#Copy",
            target: "_self"
        },
    ];
    const link = document.getElementById("link");
    Button.forEach(post => {
    link.innerHTML += `
    <a href="${post.link}" target="${post.target}" class="animate__animated animate__fadeIn">
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

    document.getElementById("Discord").addEventListener("click", copy)
})();

// plate initialization
$(".icon").plate({inverse: true});