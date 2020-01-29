var pro_detail={
	'jems': {'name': 'JEMS Fees Managment System',
			 'technology': 'C# .NET',
			 'domain': 'Fees Management System',
			 'detail': 'JEMS Fees Management System is a custom made Windows Destop Application for JEMS School',
			 'images': ['media/images/admission.png', 'media/images/fees.png', 'media/images/report1.png', 'media/images/reports.png'],
			 'link': 'https://github.com/shubham-khandalkar/jems_fms'
			 },
	'ggitstouch': {'name': 'GGITS Touch',
			 'technology': 'Android/Java',
			 'domain': 'Official College App',
			 'detail': 'GGITS Touch was the first Official Android Application for GGITS College launched in 2015. It was discontinued in 2016 after I left the college.',
			 'images': ['media/images/ggitstouch1.jpg', 'media/images/ggitstouch2.jpg', 'media/images/ggitstouch3.jpg', 'media/images/ggitstouch4.jpg'],
			 'link': 'https://apkpure.com/ggits-touch/com.gyanganga.ggitstouchnew'
			 },
	'websiteresume': {'name': 'My Resume Website',
			'technology': 'Django/HTML5/JS/CSS',
			'domain': 'Resume Website',
			'detail': 'An online resume website built using HTML, JS and CSS, hosted on Django platform',
			'images': ['media/images/resume3.png',  'media/images/resume1.png', 'media/images/resume2.png'],

	}
}


$(".close").click(function(){
    $(".modal-wrap").removeClass("visible");});
$(".ma").click(function(){
    $(".modal-wrap").removeClass("visible");});
$(".card-project-button").click(function(){

	var slides = [];
	details = pro_detail[this.id];
	if(this.id == "jems" || this.id == "ggitstouch" || this.id == "websiteresume")
	{
		console.log('inside');
		$("#carousel").empty();
		for(var i = 0; i < details['images'].length; i++)
		{
			$("#carousel").append('<div class="slide" style="width: ' + modal_width + 'px;"><img src=' + "'" + details['images'][i] + "'" + ')"></div>')
			console.log('looping');
		}
		$("#project-title").text(details['name']);
		$("#project-tag").text(details['domain']);
		$("#project-detail").text(details['detail']);
		$("#project-link").attr('href', details['link']);
	}
	$(".modal-wrap").addClass("visible");});
var carousel = $('#carousel'),
    slideWidth = modal_width,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
      slideWidth = modal_width;
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }
function shiftSlide(direction) {
    slideWidth = modal_width;
if (carousel.hasClass('transition')) return;
dragEnd = dragStart;
$(document).off('mouseup');
carousel
  .off('mousemove')
  .addClass('transition')
  .css('transform', 'translateX(' + direction * modal_width + 'px)');
setTimeout(function() {
  if (direction === 1) {
	$('.slide:first').before($('.slide:last'));
  } else if (direction === -1) {
	$('.slide:last').after($('.slide:first'));
  }
  carousel.removeClass('transition');
  carousel.css('transform', 'translateX(0px)');
}, modal_width);
}
$('.card').hover(function(){
	$(this).find($(".card-hover")).addClass("visible");

},
function(){
	$(this).find($(".card-hover")).removeClass("visible");
});

//$("#submit").children('div').addClass("open");