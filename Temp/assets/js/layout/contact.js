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
            link: "twitter.com/sky9154/",
        },
        {
            name: "Bahamut",
            icon: "ai-game-controller",
            link: "home.gamer.com.tw/evan9154",
        },
        {
            name: "Github",
            icon: "ai-github-fill",
            link: "github.com/sky9154",
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
    
    // 移除 href 以及 target
    const Discords = document.getElementById("Discords");
    Discords.removeAttribute("href");
    Discords.removeAttribute("target");

    // 點擊後複製 DISCORD TAG
    document.getElementById("Discord").addEventListener("click", () =>{
        M.toast({html: "已複製 DISCORD TAG"});
        navigator.clipboard.writeText("oF#9998");
    });
})();

// plate initialization
$(".icon").plate({inverse: true});