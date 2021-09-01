(() => {
    const comic = [
        {
            title: "號碼查詢",
            image: "882359036870271016/num.png",
            introduce: "輸入號碼查詢相應的漫畫"
        },
        {
            title: "關鍵字查詢",
            image: "882367311825240074/text.png",
            introduce: "輸入關鍵字查詢相關的漫畫"
        },
        {
            title: "本日排行",
            image: "882549985743372298/now.png",
            introduce: "查詢本日熱門漫畫"
        },
        {
            title: "本周排行",
            image: "882549993205010432/week.png",
            introduce: "查詢本周熱門漫畫"
        },
        {
            title: "綜合排行",
            image: "882550003074215976/all.png",
            introduce: "查詢最熱門漫畫"
        },
        {
            title: "隨機",
            image: "882550020501544980/random.png",
            introduce: "隨機推薦漫畫"
        }
    ];
    const demo = document.getElementById("demo");
    comic.forEach(post => {
    demo.innerHTML += `
    <div class="col s12 m6 xl4">
        <div class="card">
            <div class="card-image">
                <img src="https://cdn.discordapp.com/attachments/882358958189318144/${post.image}">
            </div>
            <div class="card-content">
                <p class="demo-title">${post.title}</p>
                <p>${post.introduce}</p>
            </div>
        </div>
    </div>
    `;
    });
})();