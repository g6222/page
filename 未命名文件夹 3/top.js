$(document).ready(function() {
    $("#back-to-top").hide();
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 160) {
          $("#back-to-top").fadeIn(500);
        } else {
          $("#back-to-top").fadeOut(500);
        }
      });
      $("#back-to-top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
      });

    });
  });