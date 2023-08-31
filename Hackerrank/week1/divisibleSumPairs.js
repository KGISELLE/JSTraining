// Dad0 un array de enteros y un entero positivo k
const ar = [11, 2, 3, 4, 5, 6];
const k = 5;
//n = length of ar
const n = ar.length;

//determinar el número de los pares (i, j)
//donde i < j 
// ar[i] + ar[j] es divisible por k.

// Tres pares cumplen los criterios:
// [1, 4], [2, 3], [4, 6]


const process = (ar, n, k) => {
  
  let result = 0;

  for(let i = 0; i < n; i++) {
    const element = ar[i];
    console.log("i", element);
    for(let j = 1; j < n; j++) {
      const element2 = ar[j];
      console.log("j", element2);
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        result++;
      }
    }
  }
  console.log(result);
  return result;

}

process(ar, n, k)



//TODO: Clean function for HK
function divisibleSumPairs(n, k, ar) {
  let result = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 1; j < n; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        result++;
      }
    }
  }
  console.log(result);
  return result;
}

