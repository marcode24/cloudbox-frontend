import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    ActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionsComponent,
  ],
})
export class HeadersModule { }
