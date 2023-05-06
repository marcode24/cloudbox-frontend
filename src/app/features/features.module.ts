import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '@components/components.module';

import { FeaturesComponent } from './features.component';
import { FolderModule } from './folder/folder.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeModule,
    FolderModule,
    SearchModule
  ]
})
export class FeaturesModule { }
