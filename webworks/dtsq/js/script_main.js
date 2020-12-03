// main.html 

// Attach stickers
var bodyEl = document.querySelector("body"),
    // 랜덤 숫자
    generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
        return ranNum;
}
function onMouseUp(e) {
    e.stopPropagation();
    // console.log("X= " + e.clientX + ", Y= " + e.clientY);

    // 랜덤 숫자 지정
    var randomRotate = generateRandom(0,17), 
        random = generateRandom(1,11), 
    // 이미지 URL 에 랜덤한 숫자 대입
        ImgUrl = "./img/attached/" + random + ".png";
    
    var sticker = document.createElement("img");
    sticker.setAttribute("src",ImgUrl);
    sticker.setAttribute("alt","sticker" + random);

    // 이미지 크기 랜덤
    // sticker.style.width = (random * random) * 3 + "px";
    sticker.style.width = "150px";
    sticker.style.position = "fixed";
    sticker.style.transform = "rotate(" + (randomRotate * 10) + "deg)";

    sticker.style.top = (e.clientY + 10) + "px";
    sticker.style.left = (e.clientX + 10) + "px";

    // sticker.style.zIndex = 10;
    document.body.appendChild(sticker);
    console.log(sticker);
}

bodyEl.addEventListener("mousedown", onMouseUp);



// Appear Menubar
$(document).ready(function(){
    $('.menu').hover(function(){
       $('.slide',this).stop().slideDown(300);
    },
    function(){
        $('.slide',this).stop().slideUp(500);
    });
});