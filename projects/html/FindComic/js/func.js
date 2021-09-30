(() => {
    const comic = [
        {
            title: "號碼查詢",
            image: "882672276917608488/number.png",
            introduce: "輸入號碼查詢相應的漫畫"
        },
        {
            title: "關鍵字查詢",
            image: "882672284505104474/text.png",
            introduce: "輸入關鍵字查詢相關的漫畫"
        },
        {
            title: "本日排行",
            image: "882672325223411712/day.png",
            introduce: "查詢本日熱門漫畫"
        },
        {
            title: "本周排行",
            image: "882672343799975936/week.png",
            introduce: "查詢本周熱門漫畫"
        },
        {
            title: "綜合排行",
            image: "882672385650724874/all.png",
            introduce: "查詢最熱門漫畫"
        },
        {
            title: "隨機",
            image: "882672448938606662/random.png",
            introduce: "隨機推薦漫畫"
        },
        {
            title: "快速關鍵字查詢",
            image: "",
            introduce: "利用網頁本身的文字進行關鍵字查詢，看到想查詢的關鍵字，即可立即查詢，無須輸入"
        }
    ];
    const demo = document.getElementById("demo");
    comic.forEach(post => {
    demo.innerHTML += `
    <div class="col s12 demo">
        <img src="https://cdn.discordapp.com/attachments/882672248417304616/${post.image}" class="col s12 m6">
        <div class="col s12 m6">
            <h5>${post.title}</h5>
            <p>${post.introduce}</p>
        </div>
    </div>
    `;
    });
})();