function copyClipboard(elm) {
  //var elm = document.getElementById("divClipboard");
  // for Internet Explorer
  if(elm == undefined) return;
  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
  }
  else if(window.getSelection) {
    // other browsers

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");;
  }
}
//$('.copier').click(copyClipboard($("this").focus()[0]));
$('.copier').click(function(){
	copyClipboard($(this)[0])
});


$('#contact-form').submit(function(e) {
	e.preventDefault();
	 $.ajax({
          url: "http://shubhamk.pythonanywhere.com/sendmail",
          method: "POST",
          data: {name:$("#message-name")[0].value,
				email:$("#message-email")[0].value,
				message:$("#message-body")[0].value},
          dataType: "json"
      }).done(function(response) {
          $('#success').addClass('visible');
		  setTimeout(function(){
			  $('#success').removeClass('visible');
		  }, 4000);
      }).fail(function(response)  {
		$('#success').addClass('visible');
		setTimeout(function(){
			  $('#success').removeClass('visible');
		  }, 4000);
	});
	
});