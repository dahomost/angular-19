import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  imports: [FormsModule],
})
export class AddBookComponent {
  @Input() rec: any;
  @Input() isEditMode: string = 'new';
  @Output() save: EventEmitter<any> = new EventEmitter();

  book: Book = { id: '0', name: '', age: 0, email: '' };

  ngOnInit(): void {
    this.book = { ...this.rec };
  }

  saveRecord() {
    this.save.emit({ isEditMode: this.isEditMode, data: this.book });
  }
}
