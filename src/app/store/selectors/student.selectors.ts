import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from '../reducers/student.reducer';

// Feature Selector - students
export const selectStudentState =
  createFeatureSelector<StudentState>('students');

//----------------------------------------- students

// ✅ Select all students
export const selectAllStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

// ✅ Select error message
export const selectStudentError = createSelector(
  selectStudentState,
  (state) => state.error
);

//----------------------------------------- books

// ✅ Select all books
export const selectAllBooks = createSelector(
  selectStudentState,
  (state) => state.books
);

// ✅ Select error books
export const selectAllBooksError = createSelector(
  selectStudentState,
  (state) => state.error
);
