//Contar el numero de divisores de un entero positivo n

// valor maximo de n = 500000

//Input = 4 --> output 3(1, 2, 4)


const input = 0;

function getDivisorsCnt(n){
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i)
        }
    }
    const divisorsQuantity = arr.length
    return divisorsQuantity
}

console.log(getDivisorsCnt(input))


//Solo con el contador
// function getDivisorsCnt(n){
//     let counter = 0;
//     for (let i = 0; i <= n; i++) {
//         if(n % i === 0) {
//             counter++
//         }
//     }
//     return counter;
// }

// // // getDivisorsCnt(input);
// console.log(getDivisorsCnt(input))