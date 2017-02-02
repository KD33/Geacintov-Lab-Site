
$( document ).ready(function() {

  	$('#dropdownelementburger').click(function() {

  		  if ($('.dropdownelement').is(":visible")) {

  			  	$('.dropdownelement').hide();
  			  	$('.dropdownelementselected').hide();
  			  	$('#sidebar').css({"height":"50px","transition":"height 500ms ease-in-out"});

  		  } else {

  			    $('#sidebar').css({"height":"270px","transition":"height 500ms ease-in-out"});
            $('.dropdownelementselected').show(500);
            $('.dropdownelement').show(500);   

  	  		}
  	});

  	$('.carousel').carousel('pause');

    $('[data-toggle="tooltip"]').tooltip();   

    var header = $('#homepageheadercontainer'); //this = window

    if (header.width() < 1100) {
    	header.css({"background-size":"1099px 100%"});
    }else{
    	header.css({"background-size":"100% 100%"});
    }
});


$(document).on('mouseleave', '.carousel', function() {
    $('.carousel').carousel('pause');
});


$(window).on('resize', function(){
      var header = $('#homepageheadercontainer'); //this = window

      if (header.width() < 1100) {
      	header.css({"background-size":"1099px 100%"});
      }else{
      	header.css({"background-size":"100% 100%"});
      }

});


