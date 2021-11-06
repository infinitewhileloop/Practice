// https://exercism.org/tracks/javascript/exercises/kindergarten-garden/

const DEFAULT_STUDENTS = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Fred',
    'Ginny',
    'Harriet',
    'Ileana',
    'Joseph',
    'Kincaid',
    'Larry',
  ];
  
  const PLANT_CODES = {
    G: 'grass',
    V: 'violets',
    R: 'radishes',
    C: 'clover',
  };
  
export class Garden {

  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.diagram = diagram.split('\n');
    this.students = students.sort();
  }

  plants(student) {
    let index = this.students.indexOf(student);
    let codes = []; 
    this.diagram.forEach(line => {  // returns e.g. [ 'VV', 'VV' ] 
      codes.push(line.slice(index * 2, index * 2 + 2));
    });
    codes = [...codes.join('')];  // returns e.g. [ 'C', 'G', 'R', 'C' ]
    let fullNames = codes.map(code => PLANT_CODES[code]);
    return fullNames; 
  }
}
