function card(){
    const card = [
        {
            title: "Animate.css",
            link: "https://animate.style/",
            introduction: "是一個隨時隨地都可以使用的動畫效果，主要是在強調內容、淡出淡入以及滑動。"
        },
        {
            title: "Materialize",
            link: "https://materializecss.com/",
            introduction: "Materialize 是根據 Google 在 2014 年所提出的設計語言 Material Design 所開發而成的 CSS 框架，<br>\
            並擁有多項優點，如：輕量化的框架、使專案能夠實踐 Material Design 的設計風格，以及提供開發者很大的客製化空間。"
        },
        {
            title: "Bootstrap",
            link: "https://getbootstrap.com/",
            introduction: "Bootstrap 是目前響應式及行動裝置網頁設計，最知名的框架，提供了包含 HTML、 CSS 及 JS 等內容的框架，<br>\
            並且可快速地打造一個前端樣板。"
        },
        {
            title: "jQuery",
            link: "https://jquery.com/",
            introduction: "以 JavaScript 來編寫的函式庫，簡化許多 JavaScript 的功能，可以更輕鬆方便的製作網站功能，<br>\
            如：操作文件、建立動畫效果、開發 AJAX 程式。"
        },
    ];
    const ccard = document.getElementById('card');
    card.forEach((post) => {
    ccard.innerHTML += `
    <div class="row animate__animated animate__bounceIn" id="card">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>${post.title}</h4>
                        <p>${post.introduction}</p>
                    </div>
                    <div class="card-action">
                        <a href="${post.link}" target="_blank">link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    });
};