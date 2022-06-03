
// Validación de fecha
var fechaIntroducida = prompt("Introduce la fecha");

var expresionRegularFecha = /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

if(!expresionRegularFecha.test(fechaIntroducida)){
  alert("Introduce la fecha correctamente XX/XX/XXXX");
}else{
  alert("Fecha correcta");
}

//validación de email
var emailIntroducido = prompt("Introduce el email");

var expresionRegularEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

if(!expresionRegularEmail.test(emailIntroducido)){
  alert("Introduce el correo correctamente");
}else{
  alert("email correcto");
}


// Reemplazo de caracteres
const caracteresIntroducidos = prompt("Introduce los caracteres");

const str = caracteresIntroducidos.replace(/[&]/g, "&amp;");
const str2 = str.replace(/['\']/g, "&quot;");
const str3 = str2.replace(/[<]/g, "&lt;");
const str4 = str3.replace(/[>]/g, "&gt;");

console.log(str4);


