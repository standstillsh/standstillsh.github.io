// script_members.js

var darkerEls = document.querySelectorAll(".darker"),
    slideEls = document.querySelectorAll(".slides");
    introEls = document.querySelectorAll(".intro"),
    diaEls = document.querySelectorAll(".dia");

darkerEls = Array.prototype.slice.call(darkerEls); // 요소 노드 목록을 배열로 치환.
slideEls = Array.prototype.slice.call(slideEls);
introEls = Array.prototype.slice.call(introEls);
diaEls = Array.prototype.slice.call(diaEls);

function onMouseOverSlide(e) {
    e.preventDefault();
    var el = e.currentTarget, // 현재 클릭 된 리스트 중에 몇번째에 해당하는 요소인지 체크.
    index = slideEls.indexOf(el);
    console.log(index);
    gsap.to(darkerEls[index], {opacity: 0, duration: 0.5, ease: "sine.Out"});
    gsap.to(introEls[index], {opacity: 1, duration: 0.5, ease: "sine.Out"});

    for(var j = 0; j <= 2; j++){
        // diaEls[j].style.animationPlayState = "paused";
        // diaEls[j].style.zIndex = 4;
    }
}


function onMouseLeaveSlide(e) {
    e.preventDefault();
    var el = e.currentTarget, // 현재 클릭 된 리스트 중에 몇번째에 해당하는 요소인지 체크.
    index = slideEls.indexOf(el);
    console.log(index);
    gsap.to(darkerEls[index], {opacity: 1, duration: 0.5, ease: "sine.Out"});
    gsap.to(introEls[index], {opacity: 0, duration: 0.5, ease: "sine.Out"});

    for(var j = 0; j <= 2; j++){
        // diaEls[j].style.animationPlayState = "running";
        // diaEls[j].style.zIndex = 0;
    }

}

for(var i = 0; i <= 3; i++) {
    slideEls[i].addEventListener("mouseover", onMouseOverSlide);
    slideEls[i].addEventListener("mouseleave", onMouseLeaveSlide);
}