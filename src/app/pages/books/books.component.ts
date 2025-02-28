import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  loadBooks,
  addBook,
  updateBook,
  deleteBook,
} from '../../store/actions/student.actions';

import { selectAllBooks } from '../../store/selectors/student.selectors';
import { AddBookComponent } from '../../components/student/addBook/add.component';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  imports: [AddBookComponent],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  book: any = {};
  isEditMode = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAllBooks).subscribe((res: any) => {
      this.books = res && res.length > 0 ? res : [];
      console.log('book.compo -=> state.books', this.books);
    });
    this.store.dispatch(loadBooks());
  }

  saveRecord(event: any) {
    const book: Book = event.data ? event.data : {};

    if (event.isEditMode === 'edit') this.store.dispatch(updateBook({ book }));
    else if (event.isEditMode === 'new') {
      book.id = Math.round(1000000 * Math.random()).toString(); // Generate a unique ID
      this.store.dispatch(addBook({ book }));
    }

    this.isEditMode = '';
  }

  editRecord(book: Book) {
    this.isEditMode = 'edit';
    this.book = book;
  }

  deleteRecord(id: string) {
    this.store.dispatch(deleteBook({ id: id }));
  }
}
