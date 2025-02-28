import { createReducer, on } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import { Student } from '../../models/student.model';
import { Book } from '../../models/book.model';

export interface StudentState {
  students: Student[];
  books: Book[];
  error: string | null;
}

export const initialState: StudentState = {
  students: [],
  books: [],
  error: null,
};

export const studentReducer = createReducer(
  initialState,

  // ✅ Load students success
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    error: null,
  })),

  // ✅ Load students failure
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // ✅ Add student
  on(StudentActions.addStudent, (state, { student }) => {
    let studentsCopy = [...state.students];
    studentsCopy.push(student);
    return { ...state, students: studentsCopy };
  }),

  // ✅ Update student
  on(StudentActions.updateStudent, (state, { student }) => {
    let studentsCopy = [...state.students];
    const index = studentsCopy.findIndex((s) => s.id === student.id);
    if (index !== -1) studentsCopy[index] = student;
    return { ...state, students: studentsCopy };
  }),

  // ✅ Delete student
  on(StudentActions.deleteStudent, (state, { id }) => {
    let studentsCopy = [...state.students].filter((s) => s.id !== id);
    return { ...state, students: studentsCopy };
  }),

  //-----------------------------------  books -------------------------------------

  // ✅ Load books success
  on(StudentActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    books,
    error: null,
  })),

  // ✅ Load books failure
  on(StudentActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // ✅ Add book
  on(StudentActions.addBook, (state, { book }) => {
    let booksCopy = [...state.books];
    booksCopy.push(book);
    return { ...state, books: booksCopy };
  }),

  // ✅ Update book
  on(StudentActions.updateBook, (state, { book }) => {
    let booksCopy = [...state.books];
    const index = booksCopy.findIndex((s) => s.id === book.id);
    if (index !== -1) booksCopy[index] = book;
    return { ...state, books: booksCopy };
  }),

  // ✅ Delete book
  on(StudentActions.deleteBook, (state, { id }) => {
    let booksCopy = [...state.books].filter((s) => s.id !== id);
    return { ...state, books: booksCopy };
  })
);
