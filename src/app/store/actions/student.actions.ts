import { createAction, props } from '@ngrx/store';
import { Student } from '../../models/student.model';
import { Book } from '../../models/book.model';

// Load Students---------------------------------------------------------

export const loadStudents = createAction('[Student] Load Students');

export const loadStudentsSuccess = createAction(
  '[Student] Load Students Success',
  props<{ students: Student[] }>()
);
export const loadStudentsFailure = createAction(
  '[Student] Load Students Failure',
  props<{ error: string }>()
);

// Add Student
export const addStudent = createAction(
  '[Student] Add Student',
  props<{ student: Student }>()
);

// Update Student
export const updateStudent = createAction(
  '[Student] Update Student',
  props<{ student: Student }>()
);

// Delete Student
export const deleteStudent = createAction(
  '[Student] Delete Student',
  props<{ id: string }>()
);

// Load books ---------------------------------------------------------------

export const loadBooks = createAction('[Book] Load Books');

export const loadBooksSuccess = createAction(
  '[Book] Load Booka Success',
  props<{ books: Student[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: string }>()
);

// Add Book
export const addBook = createAction('[Book] Add Book', props<{ book: Book }>());

// Update Student
export const updateBook = createAction(
  '[Book] Update Book',
  props<{ book: Book }>()
);

// Delete Student
export const deleteBook = createAction(
  '[Book] Delete Book',
  props<{ id: string }>()
);
