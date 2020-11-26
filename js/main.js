$(document).ready(function () {
  var IsMouseMove = false;

    // setTimeout(function() { 
    //     $('#topCircle').plaxify({"xRange":20})
    //     $('#bottomline').plaxify({"xRange":50})
    // }, 5000);

    $('#topCircle').css({
      'margin-left' : '0',
      'margin-top' : '-110px'
    });

    $('#bottomline').css({
      'margin-left' : '0',
      'margin-bottom' : '-287px'
    });
    
    $('#topCircle').plaxify({"xRange":30})
    $('#bottomline').plaxify({"xRange":60})

    $(document).mousemove(function(e){
      if(!IsMouseMove)
      {
        $('#topCircle').css({
          'margin-left' : '10%',
          'margin-top' : '0px'
        });
        $('#bottomline').css({
          'margin-left' : '10%',
          'margin-bottom' : '0px'
        });
        IsMouseMove = true;
      }
      
   });

//   $('#topCircle').plaxify({"xRange":40,"yRange":0})
//   $('#bottomline').plaxify({"xRange":20,"yRange":0})
  $.plax.enable()
})

