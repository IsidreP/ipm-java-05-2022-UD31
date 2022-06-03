

setInterval(reloj, 1000);

function reloj(){

  var fecha = new Date();

  let hora = document.getElementById("horas");
  hora.innerHTML = fecha.getHours();
  
  let minuto = document.getElementById("minutos");
  minuto.innerHTML = fecha.getUTCMinutes();
  
  let segundo = document.getElementById("segundos");
  segundo.innerHTML = fecha.getSeconds();

}

