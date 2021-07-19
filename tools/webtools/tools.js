function card(){
    const card = [
        {
            title: "Animate.css",
            link: "https://animate.style/",
            llink: "",
            introduction: "是一個隨時隨地都可以使用的動畫效果，主要是在強調內容、淡出淡入以及滑動。"
        },
        {
            title: "Materialize",
            link: "https://materializecss.com/",
            llink: "",
            introduction: "Materialize 是根據 Google 在 2014 年所提出的設計語言 Material Design 所開發而成的 CSS 框架，<br>\
            並擁有多項優點，如：輕量化的框架、使專案能夠實踐 Material Design 的設計風格，以及提供開發者很大的客製化空間。"
        },
        {
            title: "Bootstrap",
            link: "https://getbootstrap.com/",
            llink: "",
            introduction: "Bootstrap是目前響應式及行動裝置網頁設計，最知名的框架，提供了包含HTML、CSS及JS等內容的框架，<br>\
            並且可快速地打造一個前端樣板。"
        },
        {
            title: "jQuery",
            link: "https://jquery.com/",
            llink: "",
            introduction: ""
        },
    ];
    const ccard = document.getElementById('card');
    card.forEach((post) => {
    ccard.innerHTML += `
    <div class="row" id="card">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>${post.title}</h4>
                        <p>${post.introduction}</p>
                    </div>
                    <div class="card-action">
                        <a href="${post.link}" target="_blank">link</a>
                        <a href="${post.llink}" class="blue-text text-lighten-1" target="_blank">Introduction</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    });
};