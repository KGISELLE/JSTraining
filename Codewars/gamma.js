var array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
    ,
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];
    
// return ["name1", "name3"];

// var array = [
//     ["name1", 150, ["B", "A", "A", "C", "A", "A"]], //20+30+30+10+30+30
//     ["name2", 120, ["B", "A", "A", "A"]], 
//     ["name3", 160, ["B", "A", "A", "A","A"]], //20+30+30+30+30+20=160
//     ["name4", 140, ["B", "A", "A", "C", "A"]]
// ];
// //['name2', 'name4']

const findHack = (arr) => {

    const hacked = [];

    arr.map((element) => {

        const replaceGrade = element[2].map((grade) => {
            switch (grade) {
                case "A": return 30;
                case "B": return 20;
                case "C": return 10;
                case "D": return 5;
                default: return 0;
            }
        });

        let aboveGrade = replaceGrade.every((grade) => grade >= 20);
        
        if(replaceGrade.length >= 5 && aboveGrade) replaceGrade.push(20);
        
        let totalScore = replaceGrade.reduce((acc, next) => acc + next, 0);
        
        if(totalScore > 200) totalScore = 200;

        if (element[1] > 200 || element[1] !== totalScore) hacked.push(element[0])


    })
    
    
    console.log(hacked)

    return hacked;
}

findHack(array);

//Recorrer cada elemento del array
//cuando llegue a la posicion 2 o cuando encuentre un array mapaearlo
//en este mapeo hay que cambiar cada letra por un numero
//Puedo usar switch para cambiar A por 30, B por 20, C por 10, D por 5, cualquiero otra letra por 0
//Revisar si la cantidad de elementos del array es igual o superior a 5
//Si es asi añadir al array el numero 20
//sumar cada elemento del array con reduce (puntaje total)
//Convertir el array en un number
//comparar el valor elemento de la posicion 1 con el elemento en la posicion 2 del primer array mapeado
//si el valor de la posicion 1 es mayor a 200 guaradar en un array vacio el elemento de la posicion 0
//si el valor de la posicion 1 y 2 son diferentes guaradar en un array vacio el elemento de la posicion 0

