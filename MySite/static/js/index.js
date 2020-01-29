// initialization
var canvas = document.getElementById("canvas");
var home = document.getElementById("home");
var modal_width = 700;
function resetCanvas() {
	home.height = window.innerHeight; 
	home.style.height = window.innerHeight;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#252934";
	ctx.fill();
	modal_width = $(window).width() > 710 ? 700: 400;
	$('#modal').css('width', modal_width + 'px');
	$('#modal').css('max-width', modal_width + 'px');
	$('.slide').css('width', modal_width + 'px');
	$('#carousel').css('left', '-' + modal_width + 'px');
	$('.carousel-wrap').css('width', modal_width + 'px');
}

resetCanvas();



$('.page-link').click(function() {
	if($("#nav ul").hasClass("open"))
	{
		$("#nav ul").slideToggle();
		$("#nav ul").toggleClass("open");
	}
    var anchor = $(this).attr("dest");
	$('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $("nav").find('[dest="'+ anchor +'"]').addClass('active');
	
    var scrollTo = $('#' + anchor).offset().top;
	scrollTo -= 50;
	$('html, body').animate({
      scrollTop:  scrollTo
    }, 400);
	
  });
 
