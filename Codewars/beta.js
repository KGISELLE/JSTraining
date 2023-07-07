const str = "double space"

const reverseWords = (str) => {
    const convertToArray = str.split(" ");

    const reverseArray = convertToArray.map((word) => word.split("").reverse().join(""));

    const convertToString = reverseArray.join(" ");
    return console.log(convertToString);
}

// const reverseWords = (str) => {
//     const convertToArray = str.split("");
//     const reverseRecursion = convertToArray.reduce((acc, next) => [next, ...acc],[]).join("")
//     return console.log(reverseRecursion)
// }

reverseWords(str)