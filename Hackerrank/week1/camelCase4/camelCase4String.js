//camelCase es un estilo de nomenclatura común en muchos lenguajes de programación. 
//En Java, los nombres de métodos y variables generalmente comienzan con una letra minúscula, y todas las palabras posteriores comienzan con una letra mayúscula (ejemplo: startThread). 
//Los nombres de las clases siguen el mismo patrón, excepto que comienzan con una letra mayúscula (ejemplo: BlueCar).

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


//TODO: Clean function for HK
function processData(input) {

  const firstLetter = input.charAt(0).trim();
 
  const secondLetter = input.charAt(2).trim();

  //substraer solo la palabra
  const substringWords = input.substring(4, input.length);

  //To split
  const splitString = substringWords.replace(/([A-Z])/g, ' $1').trim();

  //To combine
  //Convertir en mayuscula la primera letra de cada palabra
  const splitEachWord = substringWords.split(" ");  
  const transformUpperCase = splitEachWord.map((item) => item.charAt(0).toUpperCase() + item.substring(1));
  //Crear un solo string
  const newString = transformUpperCase.join("");
  //Convertir en minuscula solo la primera letra para Method y Variable
  const firstLetterLowerCase = newString.charAt(0).toLowerCase() + newString.substring(1);

  
  if(firstLetter === "S") {
    if(secondLetter === "M") {
      const removeMethod = splitString.substring(0, splitString.length-2);
      console.log(removeMethod.toLowerCase());
    } 
    
    else if (secondLetter === "C" || "V"){
      console.log(splitString.toLowerCase());
    }

  } 
  else {
    if(secondLetter === "M") {
      console.log(firstLetterLowerCase + "()");
    } 
    else if(secondLetter === "C") {
      console.log(newString);
    } 
    else {   
      console.log(firstLetterLowerCase);
    }
  }

} 

processData(input1);
processData(input2);
processData(input3);
processData(input4);
processData(input5);
processData(input6);
