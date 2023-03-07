// You'll be passed an array of objects (list) - 
// you must sort them in descending order based on the value of the specified property (sortBy).

// Se te dara un array de objetos llamada list
// Tu deberas ordenarlos en orden descendiente segun el valor de la propiedad especificada (sortBy)

const list = [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
];

const c = list.map(item => Object.keys(item))
const d = c[0]
console.log(d)

// const sortList = (sortBy, list) => {
//     // return list.sort((a, b) => (a.a < b.a ? 1 : -1));
//     return list.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
// }

// console.log(sortList(list))
// sortList(list);