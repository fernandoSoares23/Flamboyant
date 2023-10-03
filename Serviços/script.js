
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

  document.addEventListener("DOMContentLoaded", function () {
    var imagem = document.querySelector(".imagem");
    setTimeout(function () {
        imagem.classList.add("aparecer");
    }, 1000); // Defina um atraso em milissegundos (1 segundo neste exemplo)
})