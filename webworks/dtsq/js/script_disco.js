// script_discography.js
var albumEls = document.querySelectorAll(".albums"),
    closebtnEl = document.querySelector(".closebtn"),
    recordEls = document.querySelectorAll(".record"),
    setlistEls = document.querySelectorAll(".setlist"),
    audioPlayerEl = document.querySelector("audio"),
    btnPlayEls = document.querySelectorAll(".btn-play-paused"),
    // albumListEls = document.querySelectorAll(".albumlist"),
    _albumlinks =[
    "./audio/FiveDaysInISS.mp3",
    "./audio/Bitch.mp3",
    "./audio/DingDongDitch.mp3",
    "./audio/Monster.mp3",
    "./audio/DPunkAcoustic.mp3",
    "./audio/MindGame.mp3",
    "./audio/Bitch.mp3",
    "./audio/DingDongDitch.mp3",
    "./audio/Monster.mp3",
    "./audio/DPunkAcoustic.mp3",
    "./audio/FiveDaysInISS.mp3",
    "./audio/Bitch.mp3",
    "./audio/DingDongDitch.mp3",
    "./audio/Monster.mp3",
    "./audio/DPunkAcoustic.mp3",
    "./audio/FiveDaysInISS.mp3",
    "./audio/Bitch.mp3",
    "./audio/DingDongDitch.mp3",
    "./audio/Monster.mp3",
    "./audio/DPunkAcoustic.mp3",
    ]
    isPlay = false;

albumEls = Array.prototype.slice.call(albumEls);
recordEls = Array.prototype.slice.call(recordEls);
setlistEls = Array.prototype.slice.call(setlistEls);
// album1ListEls = Array.prototype.slice.call(album1ListEls);
btnPlayEls = Array.prototype.slice.call(btnPlayEls);

function onClickAlbum(e) {
    e.preventDefault();
    console.log("click album");
    var el = e.currentTarget, index = albumEls.indexOf(el);
    el.classList.add("selectedalbum");
    closebtnEl.classList.add("btnon");
    recordEls[index].style.left = 170 + "px";

    for(var j = 0; j < 4; j++)
    {
        albumEls[j].classList.add("hidealbum");
        el.classList.remove("hidealbum");
        setlistEls[j].classList.remove("slhidden");
    }
}
function onClickcloseBtn(e) {
    console.log("click closebtn");
    closebtnEl.classList.remove("btnon");
    // 창 닫을 시 음악 정지 후 초기화
    if (isPlay) {
        console.log("정지");
        audioPlayerEl.pause();
        isPlay = false;

        for(var i = 0; i < 5; i ++) {
            btnPlayEls[i].innerText = "▶";
            btnPlayEls[i].style.color = "#74ee15";
        }

        for(var i = 0; i < 4; i++) {
            recordEls[i].style.animationPlayState = "paused";
        }
    }

    for(var j = 0; j < albumEls.length; j++)
    {
        albumEls[j].classList.remove("selectedalbum");
        albumEls[j].classList.remove("hidealbum");
        recordEls[j].style.left = 0;
        setlistEls[j].classList.add("slhidden");
    }
}
function onClickPlaybtn(e) {
    var el = e.currentTarget, index = btnPlayEls.indexOf(el);
    console.log(index);
    // false 일 경우 재생하고 true로 바꿈
    if (!isPlay) {
        console.log("재생");
        // 오디오 소스 변경
        audioPlayerEl.src = _albumlinks[index];
        audioPlayerEl.play();
        isPlay = true;
        for(var i = 0; i < btnPlayEls.length; i++) {
            btnPlayEls[i].innerText = "▶";
            btnPlayEls[i].style.color = "#74ee15";
        }
        el.innerText = "ll";
        el.style.color = "#ff00c3";
        for(var i = 0; i < 4; i++) {
            recordEls[i].style.animationPlayState = "running";
        }
    // true 일 경우 정지하고 false로 바꿈
    } else {
        console.log("정지");
        audioPlayerEl.pause();
        isPlay = false;
        el.innerText = "▶";
        el.style.color = "#74ee15";
        for(var i = 0; i < 4; i++) {
            recordEls[i].style.animationPlayState = "paused";
        }
    }
}

for(var i = 0; i < 4; i++) {
    albumEls[i].addEventListener("click", onClickAlbum);
}
// close 버튼
closebtnEl.addEventListener("click", onClickcloseBtn);

// 재생버튼
for(var i = 0; i < btnPlayEls.length; i++) {
    btnPlayEls[i].addEventListener("click", onClickPlaybtn);
}
