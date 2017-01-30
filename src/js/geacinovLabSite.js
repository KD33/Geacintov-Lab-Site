
$( document ).ready(function() {
	$('#dropdownelementburger').click(function() {
		  if ($('.dropdownelement').is(":visible")) {
			  	$('.dropdownelement').hide();
			  	$('.dropdownelementselected').hide();
			  	$('#sidebar').css({"height":"50px"});
		  } else {
			  	$('.dropdownelementselected').show();
			    $('.dropdownelement').show();	
			    $('#sidebar').css({"height":"330px"});
	  		}
	});

	$(this).carousel('pause');
	$(document).on('mouseleave', '.carousel', function() {
	    $(this).carousel('pause');
	});

   	$('[data-toggle="tooltip"]').tooltip();   
});