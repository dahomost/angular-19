import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../../models/student.model';
import { Book } from '../../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  // ✅ Get all students
  getStudents(): Observable<Student[]> {
    const jsonFile = '/files/students.json';
    return this.http.get<Student[]>(jsonFile);
  }

  getBooks(): Observable<Book[]> {
    const jsonFile = '/files/books.json';
    return this.http.get<Book[]>(jsonFile);
  }

  // private http = inject(HttpClient);

  // getProductDetails(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.API_URL}/${id}`);
  // }

  // // ✅ Get a student by ID
  // getStudentById(id: string): Observable<Student | undefined> {
  //   const student = this.students.find((s) => s.id === id);
  //   return of(student); // Use 'of' to return as an Observable
  // }

  // // ✅ Add a new student
  // addStudent(student: Student): void {
  //   student.id = (1000000 * Math.random()).toString(); // Generate a simple unique ID
  //   this.students.push(student);
  //   this.studentsSubject.next(this.students);
  // }

  // // ✅ Update an existing student
  // updateStudent(updatedStudent: Student): void {
  //   const index = this.students.findIndex((s) => s.id === updatedStudent.id);
  //   if (index !== -1) {
  //     this.students[index] = updatedStudent;
  //     this.studentsSubject.next(this.students);
  //   }
  // }

  // // ✅ Delete a student
  // deleteRecord(id: string): void {
  //   const idx = this.students.findIndex((el: any) => el.id === id);
  //   if (idx >= 0) this.students.splice(idx, 1);
  //   this.studentsSubject.next(this.students);
  // }
}
