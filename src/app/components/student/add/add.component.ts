import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../models/student.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  imports: [FormsModule],
})
export class AddComponent {
  @Input() rec: any;
  @Input() isEditMode: string = 'new';
  @Output() save: EventEmitter<any> = new EventEmitter();

  student: Student = { id: '0', name: '', age: 0, email: '' };

  ngOnInit(): void {
    this.student = { ...this.rec };
  }

  saveRecord() {
    this.save.emit({ isEditMode: this.isEditMode, data: this.student });
  }
}
