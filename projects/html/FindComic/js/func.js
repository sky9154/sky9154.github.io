(() => {
    const comic = [
        {
            title: "號碼查詢",
            image: "876099490354987068/num.gif",
            introduce: "輸入號碼以查詢相應的漫畫"
        },
        {
            title: "關鍵字查詢",
            image: "876099974256001054/str.gif",
            introduce: "輸入關鍵字以查詢相關的漫畫"
        }
    ];
    const demo = document.getElementById("demo");
    comic.forEach(post => {
    demo.innerHTML += `
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image">
                <img src="https://media.discordapp.net/attachments/873610724470046761/${post.image}">
                <span class="card-title black-text">${post.title}</span>
            </div>
            <div class="card-content">
                <p>${post.introduce}</p>
            </div>
        </div>
    </div>
    `;
    });
})();