
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

      if (header.width() < 800) {
        $('#X').css({"width":"70%"});
        header.css({"background-size":"1200px 100%"});
        $('#headertitle').css({"font-size":"35px"});
        $('#description').css({"font-size":"13px"});
      }else{
        $('#X').css({"width":"60%"});
        header.css({"background-size":"100% 100%"});
        $('#headertitle').css({"font-size":"45px"});
        $('#description').css({"font-size":"15px"}); 
      }
  }

  var overviewfunction = function()
  {
    var overview = $('.overviewmain1');
    if(overview.width() < 600){
      overview.css({"font-size":"14px"})
    }else{
      overview.css({"font-size":"17px"})
    }
  }

$( document ).ready(function() {
    
    navbarfunction();
  	headerfunction();
    overviewfunction();
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
    overviewfunction();
});


