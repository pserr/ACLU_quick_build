AOS.init({
  duration: 400,
  easing: 'ease-in-out'
 });

let dataArray = [];
let stateData = $("#state_data");

$(function(){
  $(window).scroll(function(){
    if ($("#stage_8").hasClass("aos-animate"))
    {stateData.html("Illinois 46,054");}
    else if ($("#stage_7").hasClass("aos-animate"))
    {stateData.html("Illinois 52,089");}
    else if ($("#stage_6").hasClass("aos-animate"))
    {stateData.html("Illinois 56,211");}
    else if ($("#stage_5").hasClass("aos-animate"))
    {stateData.html("Illinois 62,393");}
    else if ($("#stage_5").hasClass("aos-animate"))
    {stateData.html("Illinois 64,054");}
    else if ($("#stage_4").hasClass("aos-animate"))
    {stateData.html("Illinois 71,321");}
    else if ($("#stage_3").hasClass("aos-animate"))
    {stateData.html("Illinois 76,786");}
    else if ($("#stage_2").hasClass("aos-animate"))
    {stateData.html("Illinois 81,992");}
    else if ($("#stage_1").hasClass("aos-animate"))
    {stateData.html("Illinois 85,687");}
    else {stateData.html("Illinois 92,109");}
  });
});
