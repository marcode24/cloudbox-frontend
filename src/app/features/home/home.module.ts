import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownsModule } from '@shared/dropdowns/dropdowns.module';
import { HeadersModule } from '@shared/headers/headers.module';
import { LoadersModule } from '@shared/loaders/loaders.module';
import { ModalsModule } from '@shared/modals/modals.module';

import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DropdownsModule,
    ComponentsModule,
    HeadersModule,
    ModalsModule,
    LoadersModule,
  ]
})
export class HomeModule { }
