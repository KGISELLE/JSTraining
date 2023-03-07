//Contar el numero de divisores de un entero positivo n

// valor maximo de n = 500000

//Input = 4 --> output 3(1, 2, 4)

// Solucion con recursividad y usando principios matematicos

//Principios Matematicos
// * Cualquier numero natural distinto de 1 tiene minimo dos divisores el numero 1 y el mismo numero
// * Cualquier numero de la mitad mas 1 ya no es divisor del numero

//Recursos
//https://www.youtube.com/watch?v=t6WPFguHdW4
//No funciona con input mayor a 20935

const input = 20935;

function getDivisorsCnt(n) {
  let count = 1;
  // let divisor = 0;

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      count++;
      // console.log("count", count);
      // divisor = n / i;
      // console.log("divisor", divisor);
    }
  }

  return console.log("RETURN", count)
}

getDivisorsCnt(input);

