$(".trigger-animated").inViewport(function(px) {
  if (px) {
    $(this).addClass("triggeredCSS3");
    var element = $(this);
    setTimeout(function() {
      element.css("visibility", "visible");
    }, 700);
  }
});
