import { Student } from './../models/app.student.model';
import { Component } from '@angular/core';
import { StudentLogic } from '../logic/app.student.logic';
import { Cities } from '../models/app.constant';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student:Student;
  students:Array<Student>;

  cities: Array<string>;

  columns:Array<string>;

  private logic:StudentLogic;
  canDelete = false;

  constructor(){
    this.student = new Student('','','',0);
    this.students = new Array<Student>();
    this.cities = new Array<string>();
    this.cities = Cities;

    this.logic = new StudentLogic();

    this.students = this.logic.getStudents();

    this.columns = new Array<string>();

    // read properties of Product Class
    this.columns = Object.keys(this.student);
  }

  clear():void {
    this.student = new Student('','','',0);
  }
  save():void {
    this.students = this.logic.addStudent(this.student);
  }

  getCity($event:any):void {
    this.student.City = $event;
 }

 onRowClick(row:Student):void{
   this.student = Object.assign({},row);
 }

 onDeleteRow(row: any): void {
  const index = this.students.indexOf(row);
  if (index !== -1) {
    this.students.splice(index, 1);
  }
}
}
