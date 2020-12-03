// about.js
console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        var Ischeck = false,
            $cirrot = $('#cir_rot'),
            rot = -58,
            prevX = null,
            IsGo = true,
            $resume = $('#resume');

        // $resume.mouseenter(function() {
        //     console.log("over");
        //     $resume.animate({
        //         'color' : '#ffffff',
        //     }, 300);
        // });

        $resume.on('click', function(e){
            window.open('https://drive.google.com/file/d/1qpvAPsN2Vk2XBODfIq6Gom25k1FrY1RW/view?usp=sharing')
            // window.open('https://drive.google.com/file/d/1IfNcwqsD7pA-BFRCVhPqImownFxcVnD1/view?usp=sharing')
        })

        $(document).mousemove(function(e){
            // $('#circle').html(e.pageX +', '+ e.pageY);

            // console.log(e.pageX +', '+ e.pageY);
            
            if(rot == -58)
            {
                IsGo = true;
            }
            else if(rot == 78)
            {
                IsGo = false;
            }

            if(IsGo)
            {
                rot += 1;
            }
            else if(!IsGo)
            {
                rot -= 1;
            }
            

            // if (rot > -58) {
            //     if (prevX < e.pageX)
            //     {
            //         rot += 1;
            //     }
            //     else
            //     {
            //         rot -= 1;
            //     }
            // }
            // else if (rot < 78)
            // {
            //     if (prevX < e.pageX)
            //     {
            //         rot += 1;
            //     }
            //     else
            //     {
            //         rot -= 1;
            //     }
            // }
            
            $cirrot.css({
                'transform' : 'rotate(' + rot + 'deg)',
            });
            //console.log(rot);

            prevX = e.pageX;
            
         });

        // $('.wrap').on('mousemove',function(e) {
        //     // console.log("이동");
        //     if(!Ischeck)
        //     {
        //         $('#cir_rot').css('-webkit-animation-play-state' , 'running')
        //         Ischeck = true;
        //     }
        //     else
        //     {
        //         $('#cir_rot').css('-webkit-animation-play-state' , 'paused')
        //         Ischeck = false;
        //     }
        // });
    });
})(jQuery);