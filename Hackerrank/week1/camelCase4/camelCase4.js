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

const input = ["S;M;plasticCup()", "S;C;LargeSoftwareBook", "S;V;pictureFrame", "C;M;white sheet of paper", "C;C;coffee machine", "C;V;mobile phone"]


//TODO: Clean function for HK
function processData(input) {

  const a = input.map( elm => {

    let firstLetter = elm.charAt(0);
    let secondLetter = elm.charAt(2);

    //Procesos para Dividir
    const substringMethodWords = elm.substring(4, elm.length-2);
    const substringWords = elm.substring(4, elm.length);

    const splitMethodWords = substringMethodWords.replace(/([A-Z])/g, ' $1').trim();
    const splitWords = substringWords.replace(/([A-Z])/g, ' $1').trim();

    //Procesos para combinar
    const splitEachWord = substringWords.split(" ");
    
    const transformUpperCase = splitEachWord.map((item) => item.charAt(0).toUpperCase() + item.substring(1));

    const newString = transformUpperCase.join("");

    const firstLetterLowerCase = newString.charAt(0).toLowerCase() + newString.substring(1);


    if (firstLetter === "S") {
      if (secondLetter === "M") {
        console.log(splitMethodWords.toLowerCase());
      } else if (secondLetter === "C" || "V") {
        console.log(splitWords.toLowerCase())
      }
    } else {
      if (secondLetter === "M") {
        
        console.log(firstLetterLowerCase + "()");

      } else if(secondLetter === "V") {
        console.log(firstLetterLowerCase);

      } else if(secondLetter === "C") {
  
        console.log(newString);

      }
    }

  })

} 

processData(input);

