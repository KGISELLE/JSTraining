//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//Se le proporciona un array (que tendrá una longitud de al menos 3, pero podría ser muy grande) que contiene números enteros. El array está completamente compuesto por enteros impares o completamente compuesta por enteros pares excepto por un solo número entero N. Escriba un método que tome el array como argumento y devuelva este "valor atípico" N.

const input = [2, 4, 0, 100, 4, 11, 2602, 36]; //11
const input2 = [160, 3, 1719, 19, 11, 13, -21]; //160
const input3 = [-182964392,-169665998,2856140,-128710378,38643656,-54696708,-161309392,-199674642,-18524006,-150000982,165834594,-117929661,78677628,131724182,-59545028,-180551840,-143986108,-74329782,-170181304,-79893968,-62417076,199774548,79478364,34533684,-143951320,76824428,180991764,181354986,64756140,174112210,53358692,-64347406,-51622836,154244134] //-8726961

// const findOutlier = (integers) => {
//     const arrEven = [];
//     integers.map( (number) => {
//         if (number % 2 === 0 === true) {
//             arrEven.push(number)
//         }
//     });

//     const res = arrEven.length === 1 ? arrEven[0] : integers.find(number => number % 2 === 1);

//     return console.log(res)

//     // if (arrEven.length === 1) {
//     //     const a = arrEven[0];
//     //     console.log(a)
//     //     console.log(typeof(a))
//     // } else {
//     //     const b = integers.find(number => number % 2 === 1);
//     //     console.log(b)
//     //     console.log(typeof(b))
//     // }
    
// }

// findOutlier(input2);

//clean Function
// const findOutlier = (integers) => {
//     const arrEven = [];
//     integers.map( (number) => {
//         if (number % 2 === 0 === true) {
//             arrEven.push(number)
//         }
//     });

//     const res = arrEven.length === 1 ? arrEven[0] : integers.find(number => number % 2 === 1);

//     return console.log(res)
    
// }

// findOutlier(input2);

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
// }

// const findOutlier = (integers) => {
//     const arrEven = integers.filter(number => number % 2 === 0);
//     console.log(arrEven)

//     //integers.map(number => console.log(number % 2))

//     const res = arrEven.length === 1 ? arrEven[0] : integers.find(number => number % 2);

//     return console.log(res)
    
// }

// findOutlier(input3);

// -----------------------------------------

// function findOutlier(integers: number[]): number {
//   console.log(">> integers: ", integers);
//   const rule = findRule(integers);
//   console.log(">> rule: ", rule);
//   let index = 0;
//   while (Math.abs(integers[index]) % 2 === rule) {
//     index++;
//   }
//   console.log(">> integers[", index, "]: ", integers[index]);
//   return integers[index];
// }
// const findRule = (threeIntegers: number[]): number => {
//   let oddCount = 0;
//   let evenCount = 0;
//   for (let i = 0; i < 3; i++) {
//     if (Math.abs(threeIntegers[i]) % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   }
//   if (evenCount > oddCount) return 0;
//   else return 1;
// };