import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  isEditMode = '';
  idx: number = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ss: StudentService
  ) {}

  ngOnInit(): void {
    this.ss.getStudents().subscribe({
      next: (res: Student[]) => (this.students = res),
      error: (err) => console.log('err-=>', err),
      complete: () => console.log('complete'),
    });
  }

  saveStudent(event: any) {
    console.log('event -=.', event);
    if (event.isEditMode === 'edit') {
      this.ss.updateStudent(event.data);
    } else if (event.isEditMode === 'new') {
      this.ss.addStudent(event.data);
    }
    this.idx = 0;
    this.isEditMode = '';
  }

  editRecord(index: number) {
    this.idx = index;
    this.isEditMode = 'edit';
    console.log('update rec idx -=>', index, this.idx);
  }

  deleteRecord(index: number) {
    this.ss.deleteRecord(index);
  }
}
