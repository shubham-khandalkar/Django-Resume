
var windowWidth = $(window).width();

$("#nav-toggle").click(function() {
  $("#nav ul").slideToggle();
  $("#nav ul").toggleClass("open");
});

$(window).resize(function() {
  resetCanvas();
  windowWidth = $(window).width();
  if (windowWidth > 750) {
    {
      $("#nav ul").css("display", "block");
      $("#nav-toggle").css("display", "none");
      $("#nav ul").removeClass("open");
    }
  } else {
    $("#nav-toggle").css("display", "block");
    if (!$("#nav ul").hasClass("open")) $("#nav ul").css("display", "none");
  }
});

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;
window.onscroll = function() {if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }};


