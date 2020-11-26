// workUnity
$(document).ready(function() {
    $("body").on('mousewheel',function(e){
        console.log("scroll");
        console.log(scrollY);
        // i += 1;
        // $image.attr("src",_imagelinks[i]);
        
        // 스크롤Y가 2800보다 커지면 실행
        if(scrollY >= 2800)
        {
            console.log("scroll 2000");

            // 프로젝트 이름 변경
            $("#projectname1").html('Reincarnation');

            // 프로젝트 서브 이름 변경
            $("#projectname2").html('Reincarnation Arcade Game');

            // 프로젝트 개요 변경
            $("#date").html('2020, 06');
            $("#role").html('Solo Project');
            $("#used").html('Unity / C# / Photoshop / Illustrator');

            // 프로젝트 설명 변경
            $("#aboutproject").html('<span class="kor">죽음과 환생을 주제로한 아케이드 게임을 제작했습니다.<br /> 배운 내용 외에도 검색을 통해 여러가지 시도를 해보았습니다.<br />총 두가지의 스테이지로 구성되어 있으며 점수에 따라 엔딩이 달라집니다.<br />게임 분위기와 어울리도록 그래픽 컨셉을 잡으려 노력했습니다.</span>');

            // 버튼
            $("#workbutton").css('visibility', 'visible');
            $("#workbutton").html('<a href="https://drive.google.com/file/d/1pSdlErMwAcjxvm6tEAzm_SDaAdylDFBw/view?usp=sharing" target="_blank">SEE PROJECT</a>');
    
        }
        // 원상태로 돌리기
        else if (scrollY <= 2799)
        {
            // 프로젝트 이름 변경
            $("#projectname1").html('THE EYE');

            // 프로젝트 서브 이름 변경
            $("#projectname2").html('THE EYE');

            // 프로젝트 개요 변경
            $("#date").html('2020, 11');
            $("#role").html('Team Project <span class="kor">팀장, 기획, </span> <span class="eng"> UNITY3D</span>');
            $("#used").html('UNITY3D / C# / Leap Motion');

            // 프로젝트 설명 변경
            $("#aboutproject").html('<span class="kor"><b>2020 계원예술대학교 조형제 졸업작품 최우수 선정.</b> <br /> 힘들었던 2020년 한해, 사람들에게 긍정과 위로의 메세지를 전하고자 뉴미디어 타로 체험전시를 기획했습니다. 손동작을 인식하는 Leap Motion과 Unity3D상에서 C# 스크립트를 통해 구현했으며, 이를 통해 체험자는 디지털 공간 속의 오브젝트를 손을 통해 집거나 옮기며 제어할 수 있습니다.</span>');

            // 버튼
            $("#workbutton").css('visibility', 'visible');
            $("#workbutton").html('<a href="https://www.youtube.com/watch?v=_8gEn8XDNF8" target="_blank">WATCH VIDEO</a>');
        }
    });
});

