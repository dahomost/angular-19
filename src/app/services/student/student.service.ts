import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Student } from '../../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: '1', name: 'John Doe', age: 20, email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', age: 22, email: 'jane@example.com' },
    { id: '3', name: 'H. John Doe', age: 20, email: 'b-john@example.com' },
    { id: '4', name: 'B. Jane Smith', age: 22, email: 'h-jane@example.com' },
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);

  constructor() {}

  // ✅ Get all students
  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  // ✅ Get a student by ID
  getStudentById(id: string): Observable<Student | undefined> {
    const student = this.students.find((s) => s.id === id);
    return of(student); // Use 'of' to return as an Observable
  }

  // ✅ Add a new student
  addStudent(student: Student): void {
    student.id = (1000000 * Math.random()).toString(); // Generate a simple unique ID
    this.students.push(student);
    this.studentsSubject.next(this.students);
  }

  // ✅ Update an existing student
  updateStudent(updatedStudent: Student): void {
    const index = this.students.findIndex((s) => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
      this.studentsSubject.next(this.students);
    }
  }

  // ✅ Delete a student
  deleteRecord(idx: number): void {
    this.students.splice(idx, 1);
    this.studentsSubject.next(this.students);
  }
}
