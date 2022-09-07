/* 
Aqui iran las funciones de JavaScripts
*/
console.log("Hola desde el navegador")


/****************** DROPDOW (inicio) **********************/
/* fuente...
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  

// img cambio de menu x -...
let texto = document.querySelector('#dropdown_burguer');
                
texto.addEventListener('click', function(){
    //alert("holaaaaaa");
    texto.classList.toggle("fa-bars");
    texto.classList.toggle("fa-minus");
});
  
/****************** DROPDOW (final) **********************/

