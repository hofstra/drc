$(document).ready(function() {
  var menuToggle = $('#js-navigation-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  $("ul.navigation-menu > li.nav-link").hover(function() {
    console.log("hover");
    $(this).addClass("nav-hover");
    $(this).find("ul.nav-nested").removeClass("hidden");
  }, function() {
    $(this).removeClass("nav-hover");
    $(this).find("ul.nav-nested").addClass("hidden");
  });
});
