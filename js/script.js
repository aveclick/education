//
//
// onload = function() {
//   toggleSlider();
// }
//
// window.onresize = function() {
//   toggleSlider();
// }
//
$(document).ready(function() {
    $('#sidebar a').click(function(){
      $('#sidebar a').removeClass('active');
      $(this).addClass('active');
    })
  });

function toggleSlider() {
//   var width = window.innerWidth;
//   console.log(width);
//
//   if(width < 768) { //mobile
//     $(".slider").show();
//     $(".cards").hide();
//   }
//   else { //desktop
//     $(".slider").hide();
//     $(".cards").show();
//   }
// }
if (window.matchMedia("(max-width: 768px)").matches){
$(".slider").not('.slick-initialized').slick({

  dots: false,
  arrows: false,
  slidesToShow: 2,
  variableWidth: true,
    infinite: false,
});
};
}

$(function(){
    toggleSlider();//calling function on window load
    $(window).resize(function(){
        toggleSlider();//calling function on window resize
    });
});
