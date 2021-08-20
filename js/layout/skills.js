// Skills Card
(() => {
    const skillscard = [
        {
            title: "App Inventor 2",
            image: "../images/skills/ai2.webp",
            time: "Sep. 2019 - Aug. 2020",
            introduce: "你媽死了",
            icon: "bxl-android",
            color: "green"
        },
        {
            title: "C Language",
            image: "../images/skills/c.webp",
            time: "Sep. 2020 - Jul. 2021",
            introduce: "垃圾東西",
            icon: "bxs-copyright",
            color: "blue"
        },
        {
            title: "HTML & CSS & JavaScript",
            image: "../images/skills/html.webp",
            time: "Sep. 2020 - Present.",
            introduce: "JS 跟 JK 足以一決高下",
            icon: "bxl-html5",
            color: "orange"
        },
        {
            title: "Python",
            image: "../images/skills/python.webp",
            time: "Nov. 2020 - Present.",
            introduce: "私私私私私",
            icon: "bxl-python",
            color: "black"
        },
        {
            title: "PHP & SQL",
            image: "../images/skills/php.webp",
            time: "Mar. 2021 - Present.",
            introduce: "靠蝦皮資料分析一日致富",
            icon: "bxl-php",
            color: "indigo accent-1"
        },
    ];
    const scard = document.getElementById('skills-card');
    skillscard.forEach((post) => {
    scard.innerHTML += `
        <div class="timeline-event">
            <div class="card timeline-content">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${post.image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${post.title}<i class="bx bx-dots-vertical-rounded right"></i>
                    </span>
                    <p class="grey-text"><i>${post.time}</i></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        ${post.title}<i class="bx bx-x bx-md right"></i>
                    </span>
                    <p>${post.introduce}</p>
                </div>
            </div>
            <div class="timeline-badge ${post.color} white-text"><i class="bx ${post.icon} bx-md"></i></div>
        </div>
    `;
    });
})();