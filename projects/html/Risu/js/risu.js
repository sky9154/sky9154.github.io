(() => {
    $.getJSON ("./json/risu.json", data => {  
        $.each (data, (i, item) => { 
            $("#btn").append (`
                <button onclick="play(this);" class="btn" id="${item.audio}">${item.name}</button>&nbsp;
            `);
        });
    });
})();
play = mp3 => {
    let audio = new Audio("./audio/" + mp3.id + ".mp3");
    audio.play();
}