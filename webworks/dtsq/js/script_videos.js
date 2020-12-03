// script_videos.js

var videowrapEl = document.querySelector("#videowrap"),
    videoframeEl = videowrapEl.querySelector("iframe"),
    videothumbUlEl = videowrapEl.querySelector("ul"),
    thumbliEls = videothumbUlEl.querySelectorAll("li"),
    titleEl = videowrapEl.querySelector("h1"),

    cuId = 0;
    exId = null,

    // 영상 링크 배열
    _videolinks =[
    "https://www.youtube.com/embed/TLdesKXMX5s?controls=0&vq=hd1080&autoplay=1&rel=0&loop=1",
    "https://www.youtube.com/embed/Cu2OHDBnKbQ?controls=0&vq=hd1080&autoplay=1&rel=0&loop=1",
    "https://www.youtube.com/embed/nj3iNLbTLIk?controls=0&vq=hd1080&autoplay=1&rel=0&loop=1",
    "https://www.youtube.com/embed/js_0fhd2qDk?controls=0&vq=hd1080&autoplay=1&rel=0&loop=1"],

    _titles =[
        "2015 DTSQ COMPILATION",
        "STAY PUFT MARSHMALLOW MAN IS COMING MV",
        "MIND GAME MV",
        "PANIC AT THE HOUSE FULL LIVE PERFORMANCE"
    ]

    thumbliEls = Array.prototype.slice.call(thumbliEls); // 요소 노드 목록을 배열로 치환.

    // console.log(thumbliEls);

function onMouseUpthumbli(e) {
    e.preventDefault();
    // console.log(e.currentTarget);
    var el = e.currentTarget, // 현재 클릭 된 리스트 중에 몇번째에 해당하는 요소인지 체크.
    index = thumbliEls.indexOf(el);
    
    // thumbliEls[index].style.opacity = 1;
    // console.log(index);
    videoframeEl.src = _videolinks[index]; // iframe src를 비디오링크 배열로 불러옴
    // 마우스 up일때 타이틀 변경
    gsap.to(titleEl, {opacity: 1,left: 5 + "%", duration: 0.5, ease: "sine.Out"});
    titleEl.innerText = _titles[index];
    // 호버시 배경 오브젝트 회전 정지

    cuId = index;
    // console.log("exId= " + exId);
    thumbliEls[exId].classList.remove('selected');
    thumbliEls[cuId].classList.add('selected');
    exId = cuId;
}

// 마우스 down 일때 텍스트 숨김
function onMouseDownthumbli(e) {
    e.preventDefault();
    titleEl.style.opacity = 0;
    titleEl.style.left = 0;
}

// 마우스 오버 시 재생
function onMouseOvervideoframe(e) {
    e.preventDefault();
    videoframeEl.src += "&autoplay=1";
}

for(var i = 0; i <= 3; i++) {
    thumbliEls[i].addEventListener("mouseup", onMouseUpthumbli);
    thumbliEls[i].addEventListener("mousedown", onMouseDownthumbli);
}

// videoframeEl.addEventListener("mouseover", onMouseOvervideoframe);
// videoframeEl.addEventListener("mouseleave", onMouseLeavevideoframe);

function init() {
    exId = cuId;
}
init();