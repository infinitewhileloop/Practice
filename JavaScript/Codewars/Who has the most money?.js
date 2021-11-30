// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/

function mostMoney(students) {

    if (students.length === 1) return students[0].name;  // only one student

    let moneyPerStudent = [];  // create array with student name and his total amount of money
    for (let student of students) {
        moneyPerStudent.push([student.name, student.fives * 5 + student.tens * 10 + student.twenties * 20]);
    }

    if (moneyPerStudent.every((item, index) => {  // all students have the same amount of money
        if (index === moneyPerStudent.length - 1) return true;
        else return item[1] === moneyPerStudent[index + 1][1];
    })) return 'all';

    let highestAmount = moneyPerStudent.reduce((acc, cur) => {  // one student has more money than the others
        if (cur[1] > acc[1]) acc = cur;
        return acc;
    }, ['', 0]);
    return highestAmount[0];
}
