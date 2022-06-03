function imagen(id){

  // Cogemos el elemento de la imagen central
  let imagen = document.getElementById("imagenCentral");
  // insertamos en este elemento el id de la imagen que se ha clicado
  imagen.src = id;
  // cogemos el elemento de la imegen que estamos mostrando
  let imagenMostrada = document.getElementById(id);
  // cogemos el parrafo
  let altImagen = document.getElementById("textoImagen");
  // Insertamos en el texto del parrafo la propiedad alt de la imagen visualizada
  altImagen.innerHTML = imagenMostrada.alt;

}