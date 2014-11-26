// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery-2-min
//= require turbolinks
//= require owl.carousel.min
//= require_tree .


$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#cssmenu').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#cssmenu').css({position: 'fixed', top: '0px'});
        } else {
            $('#cssmenu').css({position: 'static', top: '0px'});
        }
    });
});


$(document).ready(function() {

  $("#owl-example").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });

});
