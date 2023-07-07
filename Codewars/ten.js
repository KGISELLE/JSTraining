// Escriba el método .camelCase simple (función camel_case en PHP, CamelCase en C# o camelCase en Java) para cadenas. Todas las palabras deben tener su primera letra en mayúscula sin espacios

const x = "hello case";  //HelloCase

// String.prototype.camelCase=function(){
// }

const a = (string) => {
    const arrayWords = string.split(" ");
    console.log(arrayWords)
    const convertUpperCase = arrayWords.map(word => word[0].toUpperCase() + word.substring(1));
    console.log(convertUpperCase)
    const joinWords = convertUpperCase.join("");
    console.log(joinWords)
    return joinWords;
}

a(x)