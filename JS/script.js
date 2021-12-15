$(document).ready(function () {

                // START ACCORDION

 

  $(".accordion-button").mouseenter(function(){
    $(".minus").removeClass("d-none")
    $(".plus").addClass("d-none")
  });

  $(".accordion-button").mouseleave(function(){
    $(".minus").addClass("d-none")
    $(".plus").removeClass("d-none")
  });

  $(".accordion").accordion();

                  // END ACCORDION


                 

});
