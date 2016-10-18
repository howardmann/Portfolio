var s;
// Initialize skrollr library
$(document).ready(function(){
  s = skrollr.init([
    smoothScrolling=true,
    mobileCheck=function(){
       return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
    }
  ]);
});
