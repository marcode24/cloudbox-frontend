import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownsModule } from '@shared/dropdowns/dropdowns.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DropdownsModule
  ]
})
export class HomeModule { }
