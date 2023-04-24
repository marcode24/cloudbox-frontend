import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewFolderComponent } from './new-folder/new-folder.component';

@NgModule({
  declarations: [
    NewFolderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NewFolderComponent
  ]
})
export class ModalsModule { }
