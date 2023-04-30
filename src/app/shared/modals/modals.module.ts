import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '@pipes/pipes.module';

import { NewFolderComponent } from './new-folder/new-folder.component';
import { UpdateNameComponent } from './update-name/update-name.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

@NgModule({
  declarations: [
    NewFolderComponent,
    UploadFilesComponent,
    UpdateNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    NewFolderComponent,
    UploadFilesComponent,
    UpdateNameComponent
  ]
})
export class ModalsModule { }
