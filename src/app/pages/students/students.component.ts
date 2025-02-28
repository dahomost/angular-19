import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from '../../models/student.model';

import {
  loadStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from '../../store/actions/student.actions';

import { selectAllStudents } from '../../store/selectors/student.selectors';
import { AddComponent } from '../../components/student/add/add.component';

@Component({
  selector: 'app-student',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  imports: [AddComponent],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  student: any = {};
  isEditMode = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAllStudents).subscribe((st: any) => {
      this.students = st && st.length > 0 ? st : [];
      console.log('student.compo -=> state.students', this.students);
    });
    this.store.dispatch(loadStudents());
  }

  saveStudent(event: any) {
    const student: Student = event.data ? event.data : {};

    if (event.isEditMode === 'edit')
      this.store.dispatch(updateStudent({ student }));
    else if (event.isEditMode === 'new') {
      student.id = Math.round(1000000 * Math.random()).toString(); // Generate a unique ID
      this.store.dispatch(addStudent({ student }));
    }

    this.isEditMode = '';
  }

  editRecord(student: Student) {
    this.isEditMode = 'edit';
    this.student = student;
  }

  deleteRecord(id: string) {
    this.store.dispatch(deleteStudent({ id: id }));
  }
}
