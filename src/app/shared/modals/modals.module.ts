import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '@pipes/pipes.module';

import { ColorsComponent } from './colors/colors.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { UpdateNameComponent } from './update-name/update-name.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

@NgModule({
  declarations: [
    NewFolderComponent,
    UploadFilesComponent,
    UpdateNameComponent,
    ColorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    NewFolderComponent,
    UploadFilesComponent,
    UpdateNameComponent,
    ColorsComponent
  ]
})
export class ModalsModule { }
