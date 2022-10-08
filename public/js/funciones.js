
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




/****************** LIKE CORAZON (inicio) **********************/
/* 
The simplest solution simply is:
onclick="event.preventDefault(); like('<%= productsFiltrados[i].id %>');"
*/

async function like(id){

  
    const url = '/zapatillas/favoritas/' + id;
    
    const options = {
    method: 'POST',
    body: ''
    }
    
    const response = await fetch(url, options);
    const data = await response.text(); 
    

    
    const btn = document.querySelector('#heart' + id);
    
    alert(data);

/*     if(data == 'ok'){
    btn.classList.add('active-fav');
    }else{
    btn.classList.remove('active-fav');
    }  */
    
}

/****************** LIKE CORAZON (final) **********************/
