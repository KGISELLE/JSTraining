//Entry data = Cantidad de veces que rompe su récord de la temporada de más puntos y menos puntos en un juego. 
const scores = [12, 24, 10, 24]

//Los puntos anotados en el primer juego establecen su récord para la temporada y comienza a contar a partir de ahí.
//Dados los puntajes de una temporada
//determine la cantidad de veces que María rompe sus récords de más y menos puntos anotados durante la temporada.

const process = (scores) => {
  let games = scores;
  
  let min = games[0];
  console.log(min, "min")

  let max = games[0];
  console.log(max, "max")

  let minRecord = 0;
  let maxRecord = 0;

  for (const score of games) {
    if (max < score) {
        max = score;
        maxRecord++;
        console.log(maxRecord, "maxRecord")
    }
    else if (score < min) {
        min = score;
        minRecord++;
        console.log(minRecord, "minRecord")
    }
  }
  return [maxRecord, minRecord];
}

process(scores);


//TODO: Clean function for HK
function breakingRecords(scores) {
  let games = scores ;
  let min = games[0];
  let max = games[0];
  
  let minRecord = 0;
  let maxRecord = 0;
  
  for (const score of games) {
      if (max < score) {
          max = score;
          maxRecord++;
      }
      else if (score < min) {
          min = score;
          minRecord++;
      }
  }
    
  return [maxRecord, minRecord];
}
