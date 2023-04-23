import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class ComponentsModule { }
