
$(document).ready(function(){
  
      $(".stateName").mouseenter(function(){
      $(this).addClass("stateNameShow");
      $(this).removeClass("stateNameHide");
     
    });

  $(".stateName").mouseleave(function(){
      $(this).removeClass("stateNameShow");
  
    });
 
});
