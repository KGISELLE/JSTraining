//Dada esta secuencia:
// 1/1 1/2 1/3 1/4 1/5 ...
// 2/1 2/2 2/3 2/4 ...
// 3/1 3/2 3/3...
// 4/1 4/2...
// 5/1...

// Su tarea es devolver nth elementos de esta secuencia.

// Input: n -entero positivo (máx. 268435455)

// Output: cadena - nth expresión de secuencia- 'a/b'donde a y b son números enteros.

const n = 2;

const cantor = (n) => {
  let m = Math.ceil((Math.sqrt(1 + 8 * n) - 1) / 2);
  console.log(m);

  let p = (m * (m + 1)) / 2;
  console.log(p);

  let d = m % 2 === 0 ? m - 1 - p + n : p - n;
  console.log(d);

  return (1 + d) + '/' + (m - d);
};

console.log(cantor(n));
