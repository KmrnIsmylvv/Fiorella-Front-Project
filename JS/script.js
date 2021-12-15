$(document).ready(function () {

                // START ACCORDION

  // $(".accordion-button").click(function () {
  //   $(".plus").addClass("d-none")
  //   $(".minus").removeClass("d-none")
  // });

  // $(".accordion-button").dblclick(function () {
  //   $(".minus").removeClass("d-none")
  // });

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


                  //START TABS
// if($( "#nav-home-tab" ).tabs({ active:1})){
//   ("#nav-home-tab").CSS("background-color", "orangered")
// }
// #tabs .ui-tabs-active {
//   background: #5ba63c;
// }
});
