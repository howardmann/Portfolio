console.log("ready");
var s;
// Initialize skrollr library
$(document).ready(function(){
  s = skrollr.init();
  var block = $('.about-me');
  var resizeBackground = function(){
    block.height($(window).height() - 60);
  };

  $(window).resize(resizeBackground);
  resizeBackground();
});
