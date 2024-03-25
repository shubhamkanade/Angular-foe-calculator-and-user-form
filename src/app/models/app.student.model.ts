export class Student {
  [x:string]:any;
  constructor(
    public StudentId: string,
    public StudentName: string,
    public City: string,
    public StudentRollNo: number,
  ) { }
}
