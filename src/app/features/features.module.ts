import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule
  ]
})
export class FeaturesModule { }
