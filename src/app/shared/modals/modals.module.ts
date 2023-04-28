import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '@pipes/pipes.module';

import { NewFolderComponent } from './new-folder/new-folder.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

@NgModule({
  declarations: [
    NewFolderComponent,
    UploadFilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    NewFolderComponent,
    UploadFilesComponent
  ]
})
export class ModalsModule { }
