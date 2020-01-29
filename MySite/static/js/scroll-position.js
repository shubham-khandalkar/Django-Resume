function highlightLink(anchor)
{
	$("#nav ul li .present").removeClass("present");
	$("#nav ul li").find('[dest="' + anchor + '"]').addClass('present');
}

$(window).on('scroll', function () {
	var pos = $(window).scrollTop();
    var pos2 = pos + 100;
    var scrollBottom = pos + $(window).height();
	
	var finalLink = 'home';
	
	if (pos2 > $('#home').offset().top)       { finalLink = 'home'; }
    if (pos2 > $('#about').offset().top)      { finalLink = 'about'; }
    if (pos2 > $('#projects').offset().top)  { finalLink = 'projects'; }
    if (pos2 > $('#contact').offset().top ||
        pos + $(window).height() === $(document).height()) {
          finalLink = 'contact';
    }
	highlightLink(finalLink);
	
});
