//Devolver una output string que traduzca un input string s
//reemplazando cada carácter de s
//con un número
//que representa la cantidad de veces que aparece ese carácter en s
//y separando cada número con los caracteres sep.

//s, sep --> Output

//"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
//Es decir h aparece una vez en el string s
//e pararece una vez en el string s
//l aparece 3 veces en el string s
//Y cada letra-numero de la palabra es separado por el valor del string sep

const str = "hello world";
const sep = "-";

// const freqSeq = (str, sep) => {

//   let counter = 0;

//   let letterToNum = [];

//   for (let eachLetter of str ) {
//     // console.log(eachLetter);

//     for (let coincedenceLetter of str) {
//       if (eachLetter === coincedenceLetter) {
//         counter++;
//         // console.log(counter);
//       }
//     }
//     letterToNum.push(counter);
//     // console.log(letterToNum);
//     counter = 0;
//     // console.log(counter);
//   }
//   // console.log(letterToNum)
//   const strTranslated = letterToNum.join(sep);
//   // console.log(letterToNum.join(sep))
//   return strTranslated;
// };

// freqSeq(str, sep);


//Clear Solution
const freqSeq = (str, sep) => {

  let counter = 0;
  let letterToNum = [];

  for (let eachLetter of str ) {
    for (let coincedenceLetter of str) {
      if (eachLetter === coincedenceLetter) {
        counter++;
      }
    }
    letterToNum.push(counter);
    counter = 0;
  }

  const strTranslated = letterToNum.join(sep);
  return strTranslated;
};

freqSeq(str, sep);