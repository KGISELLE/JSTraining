//camelCase es un estilo de nomenclatura común en muchos lenguajes de programación. 
//En Java, los nombres de métodos y variables generalmente comienzan con una letra minúscula, y todas las palabras posteriores comienzan con una letra mayúscula (ejemplo: startThread). 
//Los nombres de las clases siguen el mismo patrón, excepto que comienzan con una letra mayúscula (ejemplo: BlueCar).

const { ImportsNotUsedAsValues } = require("typescript");

//Escribir un programa que cree o divida nombres de clases, métodos y variables de Camel Case.

//ENTRADA
//Cada línea del archivo de entrada comenzará con una operación (S o C) seguida de un punto y coma seguido de M, C o V seguido de un punto y coma seguido de las palabras que necesitará para operar.
//La operación será S (dividir) o C (combinar)
//M indica método, 
//C indica clase y 
//V indica variable
//En el caso de una operación de división, las palabras serán un método camel case, 
//una clase o un nombre de variable que debe dividir en una lista de palabras delimitadas por espacios que comienzan con una letra minúscula.
//En el caso de una operación de combinación, las palabras serán una lista delimitada por espacios de palabras que comienzan con letras minúsculas que debe combinar en la cadena de caracteres de camel adecuada. 
//Los métodos deben terminar con un conjunto vacío de paréntesis para diferenciarlos de los nombres de las variables.

//EJEMPLOS DE ENTRADA            //EJEMPLOS DE SALIDA
//S;M;plasticCup()               plastic cup
//C;V;mobile phone               mobilePhone
//C;C;coffee machine             CoffeeMachine
//S;C;LargeSoftwareBook          large software book
//C;M;white sheet of paper       whiteSheetOfPaper()
//S;V;pictureFrame               picture frame

const input1 = "S;M;plasticCup()";
const input2 = "S;C;LargeSoftwareBook";
const input3 = "S;V;pictureFrame ";

const input4 = "C;M;white sheet of paper";
const input5 = "C;C;coffee machine";
const input6 = "C;V;mobile phone";

// console.log(input1, "input")



// const process = (input) => {
//   //Identificar la primera letra del string para saber que accion realizar
//   let firstLetter = input.charAt(0);
//   console.log(firstLetter, "first letter");

//   //Identificar la segunda letra del string para saber que accion realizar
//   let secondLetter = input.charAt(2);
//   console.log(secondLetter, "second letter");
  
//   if(firstLetter === "S") {
//     //Buscar mayusculas y agregar espacios antes de estas letras
//     const spaceBeforeLetters = input.replace(/([A-Z])/g, ' $1');
//     //Quitar los espacios al inicio y al final del string
//     const spaceBeforeLetters2 = input.replace(/([A-Z])/g, ' $1').trim();
//     console.log(spaceBeforeLetters);
//     console.log(spaceBeforeLetters2, "trim");

//     // //Identificar la segunda letra del string para saber que accion realizar
//     // let secondLetter = input.charAt(2);
//     // console.log(secondLetter, "second letter");

//     if(secondLetter === "M") {
//       //Tomar el string que se le aplico el metodo trim
//       console.log(spaceBeforeLetters2, "string actual");
//       // const substringWords = spaceBetweenLetters2.substring(5, input.length);
//       const substringWords = spaceBeforeLetters2.substring(5, spaceBeforeLetters2.length-2);
//       console.log(substringWords, "subs");

//       //Ahora si transformar todas las mayusculas a minusculas
//       const lowerCaseWords = substringWords.toLowerCase();
//       console.log(lowerCaseWords)
//     } else if (secondLetter === "C"){
//       //Estas son las acciones a realizar si la segunda letras es "C" ó "V" que serian el resto de casos
//       //Para mostrar solo las palabras que necesitamos aplicar el metodo substring
//       console.log(spaceBeforeLetters2, "string actual-C");
//       const substringWords2 = spaceBeforeLetters2.substring(6, spaceBeforeLetters2.length);
//       console.log(substringWords2, "subs");

//       //Ahora si transformar todas las mayusculas a minusculas
//       const lowerCaseWords2 = substringWords2.toLowerCase();
//       console.log(lowerCaseWords2)
//     } else {
//       //para "V" solo hay que extraer las palabras para el output
//       console.log(spaceBeforeLetters2, "string actual-V");
//       const substringWords3 = spaceBeforeLetters2.substring(5, spaceBeforeLetters2.length);
//       console.log(substringWords3, "subs");

//       //Ahora si transformar todas las mayusculas a minusculas
//       const lowerCaseWords3 = substringWords3.toLowerCase();
//       console.log(lowerCaseWords3);
//     }

//   } else if (firstLetter === "C") {
//     //Buscar espacios en el string y transformar en mayuscula la primera letra despues del espacio
//     //1. Dividir el string por elemento de un array cada vez que encuentre un espacio
//     const splitWords = input.split(/\s/g);
//     console.log(splitWords)
//     //2.1. Mapear el array para para convertir en mayuscula la primera letra de cada elem
//     //2.2. Como el metodo map item.charAt(0).toUpperCase() extrae solo la letra transformada en mayuscula hay que unir la letra con el resto de las letras
//     const transformLetters = splitWords.map((item) => item.charAt(0).toUpperCase() + item.substring(1));
//     console.log(transformLetters);
//     //3. ahora hay que usar el metodo join para juntar todos los elementos del array en un string
//     const newString = transformLetters.join("");
//     console.log(newString);

//     //Evaluar segunda letra
//     // //Identificar la segunda letra del string para saber que accion realizar
//     // let secondLetter2 = input.charAt(2);
//     // console.log(secondLetter2, "second letter");
//     if(secondLetter === "M") {
//       //Es un metodo y hay que agregarle los parentesis del final
//       const addBrackets = newString + "()";
//       console.log(addBrackets);

//       //Ahora solo dejar la palabra como la necesitamos para el output
//       const outputWord = addBrackets.substring(4, addBrackets.length);
//       console.log(outputWord);
//     } else if(secondLetter === "C") {
//       console.log(newString);
//       //Ahora solo dejar la palabra como la necesitamos para el output
//       const outputWord2 = newString.substring(4, newString.length);
//       console.log(outputWord2);
//       //Por ultimo aqui transformar la primera letra en mayuscula
//       //Utilizar el metodo utilizado anteriormente
//       const capitalFirstLetter = outputWord2.charAt(0).toUpperCase() + outputWord2.substring(1);
//       console.log(capitalFirstLetter);
//     } else {
//       //Este caso es para la segunda letra "V"
//       console.log(newString);
//       //Ahora solo dejar la palabra como la necesitamos para el output
//       const outputWord3 = newString.substring(4, newString.length);
//       console.log(outputWord3);
//     }

//   }

// }

// process(input1);



//TODO: Clean function for HK
function processData(input) {
  let firstLetter = input.charAt(0);
 
  let secondLetter = input.charAt(2);
  
  if(firstLetter === "S") {
    const spaceBeforeLetters2 = input.replace(/([A-Z])/g, ' $1').trim();

    if(secondLetter === "M") {
      const substringWords = spaceBeforeLetters2.substring(5, spaceBeforeLetters2.length-2).toLowerCase();
      console.log(substringWords);

    } else if (secondLetter === "C"){
      const substringWords2 = spaceBeforeLetters2.substring(6, spaceBeforeLetters2.length).toLowerCase();
      console.log(substringWords2);

    } else {
      const substringWords3 = spaceBeforeLetters2.substring(5, spaceBeforeLetters2.length).toLowerCase();
      console.log(substringWords3);

    }

  } else if (firstLetter === "C") {
    const splitWords = input.split(/\s/g);
    const transformLetters = splitWords.map((item) => item.charAt(0).toUpperCase() + item.substring(1));
    const newString = transformLetters.join("");

    if(secondLetter === "M") {
      const addBrackets = newString + "()";
      const outputWord = addBrackets.substring(4, addBrackets.length);
      console.log(outputWord);

    } else if(secondLetter === "C") {
      const outputWord2 = newString.substring(4, newString.length);
      const capitalFirstLetter = outputWord2.charAt(0).toUpperCase() + outputWord2.substring(1);
      console.log(capitalFirstLetter);

    } else {
      const outputWord3 = newString.substring(4, newString.length);
      console.log(outputWord3);

    }
  }

} 

processData(input1);
processData(input2);
processData(input3);
processData(input4);
processData(input5);
processData(input6);