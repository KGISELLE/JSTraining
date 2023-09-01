/*Grading Policy
    - Every student receives a grade in the inclusive range from 0 to 100.
    - Any grade less than 40 is a failing grade. (En Hakerrank al parecer hay un error porque el tope de la nota aprobatoria es 38 y no 40 como dice aqui)
*/
/* Sam es un profesor y le gusta redonder las notas de acuerdo a estas reglas
    - If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
    - If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
    (En Hakerrank al parecer hay un error porque el tope de la nota aprobatoria es 38 y no 40 como dice aqui)
*/

//Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {

        if ( grades[i] >= 40) {
            const nextFiveMultiple = Math.ceil(grades[i] / 5)*5;
            const differenceToGrades = nextFiveMultiple - grades[i];
    
            if( differenceToGrades < 3 ) {
                grades[i] = nextFiveMultiple;
            }
            
        }
        
    }

    return console.log(grades);

}

gradingStudents(grades);