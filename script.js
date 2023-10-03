
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $(".black").css("background-color" , "rgba(0, 182, 18, 0);");
        }
  
        else{
            $(".black").css("background-color" , "red");  	
        }
    })
  })

 