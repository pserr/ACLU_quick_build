AOS.init({
  duration: 400,
  easing: 'ease-in-out'
 });

let dataArray = [];
let stateData = $("#state_data");

$(function(){
  $(window).scroll(function(){
    if ($("#stage_8").hasClass("aos-animate"))
    {stateData.html("New Hampshire 1,509");}
    else if ($("#stage_7").hasClass("aos-animate"))
    {stateData.html("New Hampshire 1,728");}
    else if ($("#stage_6").hasClass("aos-animate"))
    {stateData.html("New Hampshire 1,992");}
    else if ($("#stage_5").hasClass("aos-animate"))
    {stateData.html("New Hampshire 2,118");}
    else if ($("#stage_5").hasClass("aos-animate"))
    {stateData.html("New Hampshire 2,349");}
    else if ($("#stage_4").hasClass("aos-animate"))
    {stateData.html("New Hampshire 2,524");}
    else if ($("#stage_3").hasClass("aos-animate"))
    {stateData.html("New Hampshire 2,681");}
    else if ($("#stage_2").hasClass("aos-animate"))
    {stateData.html("New Hampshire 2,872");}
    else if ($("#stage_1").hasClass("aos-animate"))
    {stateData.html("New Hampshire 3,018");}
    else {stateData.html("New Hampshire 3,018");}
  });
});
