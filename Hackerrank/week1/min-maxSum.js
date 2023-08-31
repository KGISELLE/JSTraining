//Dados 5 enteros positivos 
arr = [1, 3, 5, 7, 9]

//encuentre los valores mínimos y máximos 
//que se pueden calcular sumando exactamente 4 de los 5 enteros. 
//Luego imprima los respectivos valores mínimo y máximo como una sola línea de dos enteros largos separados por espacios.
//16 24

const process = (arr) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sumaTotal = arr.reduce(reducer);
  // console.log(sumaTotal);

  const n1 = sumaTotal - arr[0];
  console.log(n1, "n1")

  const n2 = sumaTotal - arr[1];
  console.log(n2, "n2")

  const n3 = sumaTotal - arr[2];
  console.log(n3, "n3")

  const n4 = sumaTotal - arr[3];
  console.log(n4, "n4");

  const n5 = sumaTotal - arr[4];
  console.log(n5, "n5")

  const suma4 = [n1, n2, n3, n4, n5];
  console.log(suma4, "suma4")

  const nMinimo = Math.min.apply(null, suma4);
  console.log(nMinimo, "nMinimo")

  const nMaximo = Math.max.apply(null, suma4);
  console.log(nMaximo, "nMaximo")

  console.log(nMinimo, nMaximo);

}

process(arr);


//TODO: Clean function for HK
function miniMaxSum(arr) {
  // Write your code here
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sumaTotal = arr.reduce(reducer);

  const n1 = sumaTotal - arr[0];

  const n2 = sumaTotal - arr[1];
  
  const n3 = sumaTotal - arr[2];

  const n4 = sumaTotal - arr[3];

  const n5 = sumaTotal - arr[4];

  const suma4 = [n1, n2, n3, n4, n5];


  const nMinimo = Math.min.apply(null, suma4);

  const nMaximo = Math.max.apply(null, suma4);

  console.log(nMinimo, nMaximo);

}