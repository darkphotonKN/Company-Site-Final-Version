
$(document).ready(function() {

  /* scrolling navigation bar function */

  // global variables
  var navOffsetTop = $('#header-title').offset().top + 10; // find the offset of the nav bar on top
  var scrollPos = 0;
  var headNav = document.getElementById("header-title"); // header title


  // nav scroll animations when scrolling past nav menu
  function scrollNav() {
    $(window).scroll(function() {
      scrollPos = $(window).scrollTop(); // value of how much the user has scrolled down the page
      // console.log(scrollPos);

      // add fixed positioning when scrolling past navOffsetTop
      if(scrollPos >= navOffsetTop) {
        $('#head-nav').addClass('head-nav');
        $('#header-title').css('fontSize', '28px');
        $('#header-title').css('marginTop', '15px');
        $('#header-title').css('marginBottom', '-20px');
        $('#header-title').css('color', 'white');
      } else {
        $('#head-nav').removeClass('head-nav');
        $('#header-title').css('fontSize', '27px');
        $('#header-title').css('marginTop', '0px');
        $('#header-title').css('marginBottom', '0px');
        $('#header-title').css('color', '#227093');
      }
    });
  }


  /* responsive mobile nav */
  var $window = $(window);
  var mobWidthThres = '1180'; // threshold where page size becmomes small enough to trigger nav

  function navAdapt() {
    var windowSize = $window.width();
    var mynav = document.getElementById("mynav");
    var mynavMarLeft = window.getComputedStyle(mynav, null).getPropertyValue("margin-left");
    //var mynavMarLeftCss = "{0}", [mynavMarLeftCss, "stringInject"];
    //console.log(mynavMarLeftCss);

    if(windowSize < mobWidthThres) {
      //console.log('Mobile Mode'); // test
      $('.mynav').addClass('mobileNavStyle');
      $('#nav-home').addClass('mobileNavStyle');
      $('#mynav').css('marginLeft', '20%');
    } else if(windowSize > mobWidthThres) {
      $('.mynav').removeClass('mobileNavStyle');
      $('#nav-home').removeClass('mobileNavStyle');
      $('#mynav').css('marginLeft', '60%'); // sets the original margin back
    }


  }

  /* other nav animation */
  var navHome = document.getElementById("nav-home");
  navHome.addEventListener('mouseover', function() {

  });



  /* initializes web site javascript functionality */
  function init() {
    // check scroll and adjust nav to follow past threshold
    scrollNav();

    // check the width on launch and resize nav if width is below threshold
    navAdapt();

    // bind this function to an event listener to check for any resizes of the page
    $window.resize(navAdapt);
  }


  // launch page
  init();


  // tests
  console.log();


});
