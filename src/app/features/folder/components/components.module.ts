import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from '@pipes/pipes.module';

import { TableFilesComponent } from './table-files/table-files.component';

@NgModule({
  declarations: [
    TableFilesComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    TableFilesComponent,
  ]
})
export class ComponentsModule { }
