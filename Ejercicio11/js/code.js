
const resultados = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 0; i < 36000; i++) {

    var dado1 =Math.round(Math.random()*(5-1+1)+1)

    var dado2 =Math.round(Math.random()*(5-1+1)+1)

    suma = dado1 + dado2;

    switch(suma) {
        case 2:
            resultados[0] += 1;
          break;
        case 3:
            resultados[1] += 1;
          break;
        case 4:
            resultados[2] += 1;
          break;
        case 5:
            resultados[3] += 1;
          break;
        case 6:
            resultados[4] += 1;
          break;
        case 7:
            resultados[5] += 1;
          break;
        case 8:
            resultados[6] += 1;   
          break;
        case 9:
            resultados[7] += 1;      
          break;
        case 10:
            resultados[8] += 1;
          break;
        case 11:
            resultados[9] += 1;
          break;
        case 12:
            resultados[10] += 1;
          break;
        default:
          // code block
      }


}


console.log(dado1);
console.log(dado2);
console.log(resultados);