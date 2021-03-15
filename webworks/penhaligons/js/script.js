console.log("script load");
var menuBtn = document.getElementById("menu-wrap"),
    menu = document.getElementById("menu");
menuBtn.addEventListener('click', onClickMenu);
function onClickMenu() {
    menu.classList.toggle('menu-visible');
    menuBtn.classList.toggle('menu-clicked');
}
// slide
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
})

// gallery-detail
var items = document.getElementsByClassName("items"),
    detailBox = document.getElementById('gallery-detail'),
    detailCloseBtn = document.getElementById('detail-close-btn'),
    detailItems = document.getElementsByClassName("items-details"),
    index = null;
    items = Array.prototype.slice.call(items);
function onClickDetailBtn(e)
{
    detailBox.classList.remove('detail-visible');
    detailItems[index].classList.remove('selected');
}
function onClickItems(e)
{
    e.preventDefault();
    var el = e.currentTarget; // 현재 클릭 된 요소가 몇번째에 해당하는 요소인지 체크.
    index = items.indexOf(el);
    detailItems[index].classList.add('selected');
    detailBox.classList.add('detail-visible');
}
for (var i = 0; i < items.length; i++)
{
    items[i].addEventListener("click", onClickItems);
}
detailCloseBtn.addEventListener("click", onClickDetailBtn);


// jQuery
$(document).ready(function() {
    // 메뉴 이동
    $('#menu ul li a' ).click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
        });
    $('header .logo' ).click(function () {
        $('html, body').animate({
            scrollTop: 0},600);
        return false;
        });

    // 스크롤 헤더 이벤트
    var $header = $('header'),
        $page = $('#summary-area'),
        $window = $(window),
        pageOffsetTop = $page.offset().top; 

        $window.resize(function(){ // 리사이즈
            pageOffsetTop = $page.offset().top;
        });
        
        $window.on('scroll', function(){ //스크롤시
            var scrolled = $window.scrollTop() >= (pageOffsetTop - 275); //스크롤된 상태; true or false
            $header.toggleClass('down', scrolled); //클래스 토글
          });
});