import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadersModule } from '@shared/loaders/loaders.module';
import { TablesModule } from '@shared/tables/tables.module';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    LoadersModule,
    TablesModule,
  ],
})
export class SearchModule { }
