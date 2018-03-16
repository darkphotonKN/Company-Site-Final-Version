
$(document).ready(function() {

  /* scrolling navigation bar */

  // variables
  var navOffsetTop = $('#header-title').offset().top + 10; // find the offset of the nav bar on top
  var scrollPos = 0;
  var headNav = document.getElementById("header-title"); // header title


  // nav scroll animations when scrolling past nav menu
  $(window).scroll(function() {
    scrollPos = $(window).scrollTop(); // value of how much the user has scrolled down the page
    // console.log(scrollPos);

    // add fixed positioning when scrolling past navOffsetTop
    if(scrollPos >= navOffsetTop) {
      $('#head-nav').addClass('head-nav');
      $('#header-title').css('fontSize', '28px');
      $('#header-title').css('marginTop', '15px');
      $('#header-title').css('marginBottom', '-10px');
    } else {
      $('#head-nav').removeClass('head-nav');
      $('#header-title').css('fontSize', '31px');
      $('#header-title').css('marginTop', '0px');
      $('#header-title').css('marginBottom', '0px');
    }
  });


  /* mobile nav alterations */
  if(document.body.offsetWidth < 1200) {
    console.log('Mobile Mode');

  }




  /* animations */
  headNav.addEventListener(event, function() {
    if(event == 'mouseover') {
      headNav.style.fontSize = '35px';
    } else {
      headNav.style.fontSize = '30px';
    }
  });




  // tests
  console.log();


});
