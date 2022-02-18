  var clicks = 0;
 function myFunction() {
     clicks += 1;
    document.getElementById("demo").innerHTML = clicks;
}

function cambiarImagen(foto) {
  document.getElementById("imagen-producto").src = foto
}
