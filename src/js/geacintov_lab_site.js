
  var navbarfunction = function()
  {
      var header = $('#homepageheadercontainer'); 
      if (header.width() >= 900 ) { 
        $('#menu').removeClass().addClass('fullmenucontainer');
        $('#item').removeClass().addClass('fullmenuitem');        
        $('#item2').removeClass().addClass('fullmenuitem ');    
        $('#itemselected').removeClass().addClass('fullmenuitemselected'); 
        $('.dropdownelementburger').hide(); 
        $('.filler').show();
      }
      else {
        $('#menu').removeClass().addClass('menucontainer');
        $('#item').removeClass().addClass('dropdownelement');        
        $('#item2').removeClass().addClass('dropdownelement');     
        $('#itemselected').removeClass().addClass('dropdownelementselected');       
        $('.dropdownelementburger').show(); 
        $('.filler').hide();
      } 

  }

  var headerfunction = function()
  {
      var header = $('#homepageheadercontainer'); //this = window

      if (header.width() < 1000) {
        $('#X').css({"width":"60%"});
        header.css({"background-size":"1000px 100%"});
        $('#headertitle').css({"font-size":"40px"});
        $('#description').css({"font-size":"14px"});
      }else{
        $('#X').css({"width":"50%"});
        header.css({"background-size":"100% 100%"});
        $('#headertitle').css({"font-size":"52px"});
        $('#description').css({"font-size":"17px"}); 
      }
  }


$( document ).ready(function() {
    
    navbarfunction();
  	headerfunction();

    $('.dropdownelementburger').click(function() {
  		  if ($('.dropdownelement').is(":visible")) {
  			  	$('.dropdownelement').hide();
  			  	$('.dropdownelementselected').hide();
  			  	$('.menucontainer').css({"height":"50px","transition":"height 500ms ease-in-out"});
        } else {
            $('.dropdownelementselected').show(500);
           $('.dropdownelement').show(500);   
            $('.menucontainer').css({"height":"270px","transition":"height 500ms ease-in-out"});
          }
  	});

  	$('.carousel').carousel('pause');
    $('[data-toggle="tooltip"]').tooltip();   
});


$(document).on('mouseleave', '.carousel', function() {
    $('.carousel').carousel('pause');
});


$(window).on('resize', function(){
    navbarfunction();
    headerfunction();
});


