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

  $("ul.nav-nested").animate({
    height: "hide"
  }, 0);
  $("ul.navigation-menu > li.nav-link").hover(function() {
    $(this).addClass("nav-hover");
    $(this).find("ul.nav-nested").animate({
      height: "show"
    }, 200);
  }, function() {
    $(this).removeClass("nav-hover");
    $(this).find("ul.nav-nested").animate({
      height: "hide"
    }, 0);
  });
});
