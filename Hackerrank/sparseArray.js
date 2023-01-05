//Dado un array de strings de entrada (strings) y un array de strings de consulta (queries). 
//Para cada string de consulta, determine cuántas veces aparece el mismo string en el array de strings de entrada. 
//Devuelve un array de los resultados.


const queries = ["a", "abc", "bc", "ab"];

const strings = ["ab", "ab", "abc"];

const process = (queries, strings) => {

  // //! Solucion con ciclo for
  // const results = [];
  // for (let i = 0; i < queries.length; i++) {
  //   const element = queries[i];
  //   console.log("i", element);
  //   let count = 0;
  //   for (let j = 0; j < strings.length; j++) {
  //     const element2 = strings[j];
  //     console.log("j", element2);
  //     if(element === element2) {
  //       count = count + 1; 
  //       console.log(count, "count")
  //     }
  //   }
  //   results.push(count);
  // }
  // return console.log(results);

  // //! Solucion con foreach
  // const results = [];
  // queries.forEach((item) => {
  //   let i = 0;
  //   strings.forEach((arr) => {
  //     if(arr === item) {
  //       i++
  //       console.log(i, "count")
  //     }
  //   })
  //   results.push(i)
  // })
  // return console.log(results)

  //! Solucion con map
  const results = [];
  queries.map((item) => {
    let count = 0;
    strings.map((arr) => {
      if(item === arr) {
        count++
        // console.log(count, "count")
      }
    })
    results.push(count)
  })
  return console.log(results, "process fn");
}

process(queries, strings);


//Clean function for HK
function matchingStrings(strings, queries) {
  // Write your code here
  const results = [];

  queries.map((item) => {
      let count = 0;
      strings.map((arr) => {
          if(item === arr) {
          count++
          }
      })
      results.push(count)
  })
  return results;
}