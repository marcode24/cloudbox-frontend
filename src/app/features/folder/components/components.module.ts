import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownsModule } from '@shared/dropdowns/dropdowns.module';

import { PipesModule } from '@pipes/pipes.module';

import { TableFilesComponent } from './table-files/table-files.component';

@NgModule({
  declarations: [
    TableFilesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    DropdownsModule
  ],
  exports: [
    TableFilesComponent,
  ]
})
export class ComponentsModule { }
