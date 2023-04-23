import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '@components/components.module';

import { FeaturesComponent } from './features.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeModule
  ]
})
export class FeaturesModule { }
