//Dado un array de enteros
const arr =[1, 0, 1, -1, -1];

//Calcular la proporcion(decimales) de los elementos dentro del array que son positivos, negativos y cero. 

//Imprimir el valor decimal de cada fracción en una nueva línea con lugares después del decimal.

// Existen n=5 elementos en arr, dos positivos, dos negativos y uno cero.

// Los resultados se imprimen como: 
// 0.400000
// 0.400000
// 0.200000

const process = () => {

  //! Solucion con ciclo for
  let longitudArray = arr.length;
  // console.log(longitudArray);

  let numerosPositivos = 0;
  let numerosNegativos = 0;
  let numeroCero = 0;

  for (let i = 0; i < longitudArray; i++) {
    if (arr[i] > 0) {
      numerosPositivos += 1
    } else if (arr[i] < 0) {
      numerosNegativos += 1
    } else {
      numeroCero += 1
    }
  }

  let fractionPositivos = numerosPositivos / longitudArray;
  let fractionNegativos = numerosNegativos / longitudArray;
  let fractionZero = numeroCero / longitudArray; 

  console.log(fractionPositivos);
  console.log(fractionNegativos);
  console.log(fractionZero);
}

process(arr);


//? Funcion copiada
// function plusMinus(arr) {
//   let decimal = 6;
//   let length = arr.length;
//   let positive = arr.filter(val => val > 0).length;
//   let negative = arr.filter(val => val < 0).length;
//   let zero = arr.filter(val => val == 0).length;

//   function findRatio(num) {
//       return console.log(parseFloat(num / length).toPrecision(decimal));
//   }
  
//   findRatio(positive);
//   findRatio(negative);
//   findRatio(zero);
// }

//Clean function for HR
function plusMinus(arr) {
  // Write your code here

  let longitudArray = arr.length;

  let numerosPositivos = 0;
  let numerosNegativos = 0;
  let numeroCero = 0;

  for (let i = 0; i < longitudArray; i++) {
    if (arr[i] > 0) {
      numerosPositivos += 1
    } else if (arr[i] < 0) {
      numerosNegativos += 1
    } else {
      numeroCero += 1
    }
  }

  let fractionPositivos = numerosPositivos / longitudArray;
  let fractionNegativos = numerosNegativos / longitudArray;
  let fractionZero = numeroCero / longitudArray; 

  console.log(fractionPositivos);
  console.log(fractionNegativos);
  console.log(fractionZero);
}