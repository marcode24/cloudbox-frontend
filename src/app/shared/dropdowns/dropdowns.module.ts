import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DotsDropdownComponent } from './dots-dropdown/dots-dropdown.component';

@NgModule({
  declarations: [
    DotsDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DotsDropdownComponent
  ],
})
export class DropdownsModule { }
