//Dada esta secuencia:
// 1/1 1/2 1/3 1/4 1/5 ...
// 2/1 2/2 2/3 2/4 ...
// 3/1 3/2 3/3...
// 4/1 4/2...
// 5/1...


// Su tarea es devolver nth elementos de esta secuencia.

// Input: n -entero positivo (máx. 268435455)

// Output: cadena - nth expresión de secuencia- 'a/b'donde a y b son números enteros.

const n = 1

const cantor = (n) => {
    const arr = [];
    const arr2 = [];
    
    for(let i = 0; i < 5; i++){
        const dividendo = n+i;
        const divisor = n+i;
        arr.push(dividendo)
        arr2.push(divisor)
        console.log(arr)
        console.log(arr[i].toString()+"/"+arr2[i].toString())
        console.log(arr[i].toString()+"/"+(arr2[i]+1).toString())
      
        // for(let i = 0; i < 1; i++){
        //     console.log(dividendo.toString()+"/"+divisor.toString())
        // }
        // // console.log(dividendo.toString()+"/"+divisor.toString())
        // for(let i = 0; i < 1; i++){
        //     console.log(dividendo.toString()+"/"+(divisor + 1).toString(), "divs")
        // }
        
    }
}

console.log(cantor(n))