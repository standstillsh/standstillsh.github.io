// work3D
$(document).ready(function() {

    // 이미지 링크 배열

    // _imagelinks =[
    //     "./images/work_3d/1choco1.jpg",
    //     "./images/work_3d/1choco2.jpg",
    //     "./images/work_3d/1choco3.jpg",
    //     "./images/work_3d/1choco4.jpg",
    //     "./images/work_3d/1choco5.jpg",
    //     "./images/work_3d/1choco6.jpg"
    //     ];

    var $image = $("#3dimages"),
        i = 0;


    $("body").on('mousewheel',function(e){
        console.log("scroll");
        console.log(scrollY);
        // i += 1;
        // $image.attr("src",_imagelinks[i]);
        
        if(scrollY >= 2500)
        {
            // 프로젝트 이름 변경
            $("#projectname1").html('3D<span class="kor"> 오브젝트 모델링</span>');

            // 프로젝트 서브 이름 변경
            $("#projectname2").html('3D Obejct Modeling');

            // 프로젝트 개요 변경
            $("#date").html('2018, 12');
            $("#role").html('Solo Project');
            $("#used").html('3Ds Max / Photoshop');

            // 프로젝트 설명 변경
            $("#aboutproject").html('<span class="kor">평소 좋아하던 오브젝트를 직접 모델링 해보았습니다. </span>');

            // 버튼
            $("#workbutton").css('visibility', 'hidden');
        }
        // 원상태로 돌리기
        else if (scrollY <= 2499)
        {
            // 프로젝트 이름 변경
            $("#projectname1").html('<span class="kor">초코송이</span> 3D <span class="kor">애니메이션</span>');

            // 프로젝트 서브 이름 변경
            $("#projectname2").html('CHOCO BOY 3D ANIMATION');

            // 프로젝트 개요 변경
            $("#date").html('2018, 12');
            $("#role").html('Team Project <span class="kor">팀장, 기획, 모델링, 모션, 영상 편집</span>');
            $("#used").html('3Ds Max / Aftereffect / Premiere Pro');

            // 프로젝트 설명 변경
            $("#aboutproject").html('<span class="kor">오리온 초코송이를 주제로 진행한 애니메이션입니다.<br /> 과자 광고라면 귀엽기만 해야 한다는 관념을 탈피하고자 으스스하지만<br /> 귀여운 분위기를 연출했습니다.</span>');

            // 버튼
            $("#workbutton").css('visibility', 'visible');
        }
    });
});

