// const a = [3, [1, 1, 2]]; 
const a = [1, 2, 3, 4, 3, 2, 1]; 

function lonelyInteger(a) {
    // Write your code here
    // for (let i = 0; i < a.length; i++){
    //     const isSameNumber = a[i] === a[i+1]
    // }

    const lonely = a.find((el) => a.indexOf(el) === a.lastIndexOf(el) );

    console.log(lonely);
    

}

lonelyInteger(a)
