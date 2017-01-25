$(document).ready(function(){
  console.log("ready");
  var $block = $('.about-me');
  var $arrow = $('.arrow-down');

  // var resizeBackground = function(){
  //   var screenHeight = $(window).height() - 60;
  //   $block.css('height', screenHeight + 'px');
  // };
  // window.addEventListener('orientationchange', resizeBackground);
  // resizeBackground();

  $arrow.on('click', function(){
    var elementOffset = $(this).offset().top;
    var aboutMe = $(this).parent().parent().next().offset().top - 60;
    $('body').animate({
      scrollTop: aboutMe
    }, 500);
  });
});
