//? The 12 Days of Christmas

// const a = "a partridge in a pear tree."   
// const b = "On the 12th day of Christmas my true love gave to me" //-1

// const a = "On the 12th day of Christmas my true love gave to me"   
// const b = "a partridge in a pear tree." //1

// const a = "a partridge in a pear tree."   
// const b = "8 maids a milking," //-1

// const a = "On the 12th day of Christmas my true love gave to me"   
// const b = "8 maids a milking," //1

// const a = "3 French hens,"   
// const b = "a partridge in a pear tree." //1

// const a = "3 French hens,"   
// const b = "On the 12th day of Christmas my true love gave to me" //-1

// const a = "3 French hens,"   
// const b = "11 pipers piping," //-1

// const a = "12 drummers drumming,"   
// const b = "2 turtle doves and" //1

// const a = "a partridge in a pear tree."   
// const b = "a partridge in a pear tree." //0


// const comparator = (a, b) => {

//     const upperCaseRegexp = /[A-Z]/g;
//     const lowerCaseRegexp = /[a-z]/g;

//     const findUpperLetterA = a[0].match(upperCaseRegexp);
//     // const findLowerLetterA = a[0].match(lowerCaseRegexp);

//     // const findUpperLetterB = b[0].match(upperCaseRegexp);
//     const findLowerLetterB = b[0].match(lowerCaseRegexp);

//     const findNumA = Number.parseInt(a);
//     const findNumB = Number.parseInt(b);

//     // console.log(findNumB)

//     if(a === b) {
//         return console.log(0)
//     } else {
//         if(findUpperLetterA || findLowerLetterB || findNumA > findNumB) {
//             return console.log(1)
//         } else {
//             return console.log(-1)
//         }
//     }

// }

// //   console.log(comparator(a, b))

// comparator(a, b)



const comparator = (a, b) => {

    const upperCaseRegexp = /[A-Z]/g;
    const lowerCaseRegexp = /[a-z]/g;

    const findUpperLetterA = a[0].match(upperCaseRegexp);
    const findLowerLetterB = b[0].match(lowerCaseRegexp);

    const findNumA = Number.parseInt(a);
    const findNumB = Number.parseInt(b);

    if(a === b) {
        return 0
    } else {
        if(findUpperLetterA || findLowerLetterB || findNumA > findNumB) {
            return -1
        } else {
            return 1
        }
    }

}

comparator(a, b)