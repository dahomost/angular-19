import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StudentActions from '../actions/student.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { StudentService } from '../../services/student/student.service';

@Injectable()
export class StudentEffects {
  private actions$ = inject(Actions);
  private studentService = inject(StudentService);

  // laod students

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      mergeMap(() =>
        this.studentService.getStudents().pipe(
          map((students) => StudentActions.loadStudentsSuccess({ students })),
          catchError((error) =>
            of(StudentActions.loadStudentsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // laod books

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadBooks),
      mergeMap(() =>
        this.studentService.getBooks().pipe(
          map((books) => StudentActions.loadBooksSuccess({ books })),
          catchError((error) =>
            of(StudentActions.loadBooksFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
