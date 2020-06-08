// 헤더 애니메이션
$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if((st > lastScrollTop) && (lastScrollTop>0)) {
            $("header").css("top","-60px");
        } else {
            $("header").css("top","0px");
        }
            lastScrollTop = st;
        });
    });

for (var i=1; i <= 9; i++) {
    $('#cont' + i ).click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
        });
}

$(document).ready(function() {
    $(window).scroll( function(){
        $('#message1').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'54px'},800);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.messages').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px'},800);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.slidetop').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'0px'},1000);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.slideright').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'},1200);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        for (var i = 1; i <= 3; i++){
            $('#design_r'+i).each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','left':'0px'},1500);
                }
            });
        }
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.slideup').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'0px'},1000);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.otherservice').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window + 500 > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'0px'},500);
            }
        }); 
    });
});