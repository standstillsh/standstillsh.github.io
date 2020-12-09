// workUnity
$(document).ready(function() {

    $("body").on('mousewheel',function(e){
        // console.log("scroll");
        console.log(scrollY);
        // i += 1;
        // $image.attr("src",_imagelinks[i]);

        if(scrollY >= 8700)
        {
            // 프로젝트 이름 변경
            $("#projectname1").html('DTSQ <span class="kor">웹사이트');

            // 프로젝트 서브 이름 변경
            $("#projectname2").html('DTSQ Website');

            // 프로젝트 개요 변경
            $("#date").html('2020, 06');
            $("#role").html('Solo Project');
            $("#used").html('HTML / CSS / Javascript / jQuery');

            // 프로젝트 설명 변경
            $("#aboutproject").html('<span class="kor">평소 좋아하던 밴드 DTSQ를 주제로 진행한 인터랙티브 웹사이트입니다. <br/> 메인 페이지를 포함한 멤버 소개, 앨범과 수록곡 정보, 뮤직비디오와 라이브 영상,<br/>  공연 이미지를 확인할 수 있는 페이지 총 다섯개의 페이지로 구성되어 있습니다.<br/> 다양한 인터랙션을 넣어보려 노력했습니다.</span>');

            // 버튼
            $("#workbutton").css('visibility', 'visible');
            $("#workbutton").html('<a href="./webworks/dtsq/main.html" target="_blank">GO WEBSITE</a>');
    
        }
        // 원상태로 돌리기
        else if (scrollY <= 8699)
        {
            // 프로젝트 이름 변경
            $("#projectname1").html('FINE <span class="kor">웹사이트');

            // 프로젝트 서브 이름 변경
            $("#projectname2").html('FINE Website');

            // 프로젝트 개요 변경
            $("#date").html('2020, 06');
            $("#role").html('Team Project <span class="kor">기획 참여, 웹 퍼블리싱');
            $("#used").html('HTML / CSS / Javascript / jQuery');

            // 프로젝트 설명 변경
            $("#aboutproject").html('<span class="kor"><b>커뮤니케이션 디자인 국제 공모전 특선 수상.</b><br />            불법 주차 인식 개선 및 예방 서비스 FINE 웹사이트 입니다.<br /> 처음으로 시도해본 원스크롤 형식의 웹페이지로 사용자가 편리하고 한 눈에 정보를<br /> 얻을 수 있도록 스크롤 인터랙션을 활용했습니다.</span>');

            // 버튼
            $("#workbutton").css('visibility', 'visible');
            $("#workbutton").html('<a href="./webworks/fine/index.html" target="_blank">GO WEBSITE</a>');
        }
    });

    $('.gothis').click(function () {
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    
});

