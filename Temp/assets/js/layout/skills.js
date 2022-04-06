// Skills Card
(() => {
    document.body.style.overflow = "auto";
    const skillscard = [
        {
            title: "App Inventor 2",
            image: "ai2.webp",
            time: "Sep. 2019 - Aug. 2020",
            introduce: "學習 Android 裝置程式設計，不需學習較為艱澀的 Java 語法，\
            只要使用各種拼圖來組合程式，即可完成 Android 裝置的應用程式。<br>\
            類似於這種視覺化的程式設計在台灣的小學已經越來越常見了，雖然學習起來並沒有什麼難度，\
            但對於剛開始學習程式語言的人來說，學習這種程式語言能夠訓練良好的邏輯思考能力。",
            icon: "bxl-android",
            color: "green"
        },
        {
            title: "C Language",
            image: "c.webp",
            time: "Sep. 2020 - Present.",
            introduce: "C 語言是我第一次完全是用寫的語言，當然它也是我到目前為止使用最久的程式語言，\
            但是我並不會把它作為我主要使用的語言，具體一點就是，遇到要解決的問題，除非限定只能用 C 語言，\
            不然我完全不考慮使用它，並沒有什麼特別的原因，只不過是其他語言我看的更順眼而已。",
            icon: "bx bxl-c-plus-plus",
            color: "blue"
        },
        {
            title: "HTML & CSS & JavaScript",
            image: "html.webp",
            time: "Sep. 2020 - Present.",
            introduce: "目前主要使用的語言，擁有 HTML 及 CSS 作為前端的 UI 介面，大大的增加撰寫程式的樂趣，\
            除了網頁以外，甚至可以開發應用程式、瀏覽器的附加元件、手機 APP......等等的用途。<br>\
            用途雖然廣泛，但是使我繼續學習下去的動力還是，可利用 HTML 及 CSS 作為前端的 UI 介面，刻出一個不錯的畫面後，\
            並且賦予它們功能，看著那些設計出來的介面，使我就算花費10幾小時，都不會曾感到煩悶，\
            曾有這麼一個偉人說：「JS 能增進快樂，並且減少痛苦。」我想我可能與那位偉人心境是一樣的吧。",
            icon: "bxl-html5",
            color: "orange"
        },
        {
            title: "Python",
            image: "python.webp",
            time: "Nov. 2020 - Present.",
            introduce: "沒料",
            icon: "bxl-python",
            color: "black"
        },
        {
            title: "PHP & SQL",
            image: "php.webp",
            time: "Mar. 2021 - Jun. 2021",
            introduce: "沒料",
            icon: "bxl-php",
            color: "indigo accent-1"
        }
    ];
    const scard = document.getElementById("skills-card");
    skillscard.forEach(post => {
    scard.innerHTML += `
        <div class="timeline-event">
            <div class="card timeline-content">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="../assets/images/layout/skills/${post.image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${post.title}<i class="bx bx-dots-vertical-rounded right"></i>
                    </span>
                    <p class="grey-text default"><i>${post.time}</i></p>
                </div>
                <div class="card-reveal scrollbar" id="style-2">
                    <span class="card-title grey-text text-darken-4" style="font-size:20px;">
                        ${post.title}<i class="bx bx-x bx-md right"></i>
                    </span>
                    <p class="default force-overflow">${post.introduce}</p>
                </div>
            </div>
            <div class="timeline-badge ${post.color} white-text"><i class="bx ${post.icon} bx-md"></i></div>
        </div>
    `;
    });
})();