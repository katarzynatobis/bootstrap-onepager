$(document).ready(function () {
    changeBackground();
})

$(window).scroll(function () {
    changeBackground();
})

function changeBackground() {
    let navHeight = $("#main-nav").outerHeight();
    let scrollHeight = $(window).scrollTop();

    if (scrollHeight >= navHeight) {
        $("#main-nav").addClass("navbar-background");
    } else {
        $("#main-nav").removeClass("navbar-background");
    }
}


$('.nav-link').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//$('.nav-link').click(function (event) {
//    event.preventDefault();
//    document.querySelector(this.hash).scrollIntoView({
//        behavior: 'smooth'
//    });
//})
