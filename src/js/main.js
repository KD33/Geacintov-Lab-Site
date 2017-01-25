


$( document ).ready(function() {

   $('[data-toggle="tooltip"]').tooltip();   


	$('#dropdownelementmain').click(function() {
	  if ($('.dropdownelement').is(":visible")) {
	  	$('.dropdownelement').hide();
	  	$('#sidebar').css({"height":"50px"});

	  } else {
	    $('.dropdownelement').show();	
	    $('#sidebar').css({"height":"300px"});
	  }
	});


	$(this).carousel('pause');
	$(document).on('mouseleave', '.carousel', function() {
	    $(this).carousel('pause');
	});

});