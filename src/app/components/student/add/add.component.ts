import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-record-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  student: Student = { id: '0', name: '', age: 0, email: '' };

  @Input() idx: number = -1;
  @Input() isEditMode: string = 'new';

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private ss: StudentService) {}
  ngOnInit() {
    this.ss.getStudents().subscribe((res) => {
      if (this.idx >= 0) this.student = res[this.idx];
      else this.student = { id: '0', name: '', age: 0, email: '' };
      console.log('Record -=>', this.idx, this.isEditMode, this.student);
    });
  }
  saveRecord() {
    this.save.emit({ isEditMode: this.isEditMode, data: this.student });
  }
}
