
$(document).ready(function(){
  $(".p1").hover(function(){
    $(".p2").animate({left:"+=100px"});
  });
  $(".p1").click(function(){
    $(".p2").animate({left:"0"});
  });
});
