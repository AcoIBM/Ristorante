$(document).ready(function(){
  $("#mycarousel").carousel({interval: 2000});
  $("#carousel-button").click(function(){
      if($("#carousel-button").children("span").hasClass('fa-pause')){
          $("#mycarousel").carousel('pause');
          $("#carousel-button").children("span").removeClass('fa-pause');
          $("#carousel-button").children("span").addClass('fa-play');
      }
      else if($("#carousel-button").children("span").hasClass('fa-play')){
          $("#mycarousel").carousel('cycle');
          $("#carousel-button").children("span").removeClass('fa-play');
          $("#carousel-button").children("span").addClass('fa-pause');
      }
  });

  // Show modal for Reserve Table
  $("#reserveModal").click(function(){
      $('#reserveModal').modal('toggle');
  });
  // Show modal for Login
  $("#loginModal").click(function(){
      $('#loginModal').modal('toggle');
  });

});
