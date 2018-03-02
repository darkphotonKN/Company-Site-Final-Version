
$(document).ready(function() {

  /* scrolling navigation bar */

  // variables
  var navOffsetTop = $('#nav').offset().top; // find the offset of the nav bar on top
  var scrollPos = 0;

  $(window).scroll(function() {
    scrollPos = $(window).scrollTop(); // value of how much the user has scrolled down the page
    // console.log(scrollPos);

    // add fixed positioning when scrolling past navOffsetTop
    if(scrollPos >= navOffsetTop) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });






  // tests
  console.log();



});
