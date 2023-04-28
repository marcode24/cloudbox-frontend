import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    FileSizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileSizePipe
  ]
})
export class PipesModule { }
