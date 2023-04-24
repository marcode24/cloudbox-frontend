import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownsModule } from '@shared/dropdowns/dropdowns.module';

import { FileComponent } from './file/file.component';
import { FolderComponent } from './folder/folder.component';

@NgModule({
  declarations: [
    FileComponent,
    FolderComponent
  ],
  imports: [
    CommonModule,
    DropdownsModule
  ],
  exports: [
    FileComponent,
    FolderComponent
  ],
})
export class ComponentsModule { }
