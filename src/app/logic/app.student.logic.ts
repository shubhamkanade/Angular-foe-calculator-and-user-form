import { Student } from './../models/app.student.model';

export class StudentLogic {
  private students: Array<Student>;

  constructor() {
    this.students = new Array<Student>();

    this.students.push(new Student('st-11','sammer','Pune',5));
    this.students.push(new Student('st-12','sanket','Mumbai',15));
    this.students.push(new Student('st-13','rohit','Nashik',25));
  }

  getStudents():Array<Student>{
    return this.students;
  }
  addStudent(prod:Student):Array<Student>{
    this.students.push(prod);
    return this.students;
  }
}

