
$(document).ready(function() {

  /* scrolling navigation bar */

  // variables
  var navOffsetTop = $('#header-title').offset().top + 10; // find the offset of the nav bar on top
  var scrollPos = 0;
  var headNav = document.getElementById("header-nav");

  $(window).scroll(function() {
    scrollPos = $(window).scrollTop(); // value of how much the user has scrolled down the page
    // console.log(scrollPos);

    // add fixed positioning when scrolling past navOffsetTop
    if(scrollPos >= navOffsetTop) {
      $('#head-nav').addClass('fixed');
      headNav.style.marginTop = '500px';

    } else {
      $('#head-nav').removeClass('fixed');
    }
  });


  /* animations */







  // tests
  console.log();



});
