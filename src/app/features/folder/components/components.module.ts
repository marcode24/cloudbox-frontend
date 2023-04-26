import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableFilesComponent } from './table-files/table-files.component';

@NgModule({
  declarations: [
    TableFilesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableFilesComponent,
  ]
})
export class ComponentsModule { }
