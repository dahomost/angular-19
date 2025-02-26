import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddComponent } from '../../components/student/add/add.component';

@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, StudentsRoutingModule, AddComponent],
})
export class StudentsModule {}
