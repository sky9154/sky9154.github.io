(() => {
    const Button = [
        {
            name: "FaceBook",
            icon: "fab fa-facebook",
            link: "www.facebook.com/weii.0504/",
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            link: "www.instagram.com/weii_0504/",
        },
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            link: "twitter.com/sky9154/",
        },
        {
            name: "Bahamut",
            icon: "fas fa-dragon",
            link: "home.gamer.com.tw/evan9154/",
        },
        {
            name: "Github",
            icon: "fab fa-github",
            link: "github.com/sky9154/",
        },
        {
            name: "Discord",
            icon: "fab fa-discord",
            link: "Discord ID",
        },
    ];
    const link = document.getElementById("link");
    Button.forEach(post => {
    link.innerHTML += `
    <a href="https://${post.link}" target="_blank" class="col-md-6 col-lg-4 mb-5 icon" id="${post.name}s">
        <div class="text-center rounded-2" id="${post.name}">
            <span class="btn btn-lg"><i class="${post.icon}"></i> ${post.name}</span>
        </div>
    </a>
    `;
    });
    
    // 移除 href 以及 target
    const Discords = document.getElementById("Discords");
    Discords.removeAttribute("href");
    Discords.removeAttribute("target");

    // 點擊後複製 DISCORD TAG
    document.getElementById("Discord").addEventListener("click", () => navigator.clipboard.writeText("oF#9998"));
})();

// plate initialization
$(".icon").plate({inverse: true});