// https://exercism.org/tracks/javascript/exercises/grade-school

class GradeSchool {

  #allGrades = {}

  roster() {
    let copy = JSON.parse(JSON.stringify(this.#allGrades));  // return deep copy of original object, to prevent modifications outside of module
    return copy;
  }

  add(student, grade) {

    for (let grade in this.#allGrades) {  // remove student with same name from other grades
      if (this.#allGrades[grade].includes(student)) {
        let index = this.#allGrades[grade].indexOf(student);
        this.#allGrades[grade].splice(index, 1);
      }
    }

    if (!this.#allGrades.hasOwnProperty(grade)) {  // if this is the first student in this grade
      this.#allGrades[grade] = [student];

    } else {  // if this grade already has other students
      this.#allGrades[grade].push(student);
      this.#allGrades[grade].sort();
    }
  }

  grade(gradeNumber) {
    if (!this.#allGrades.hasOwnProperty(gradeNumber)) return [];  // return empty array if there are no students in that grade
    let copy = [...this.#allGrades[gradeNumber]];  // return copy of original array, to prevent modifications outside of module
    return copy;
  }
}
