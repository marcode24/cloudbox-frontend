import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '@shared/breadcrumbs/breadcrumbs.module';

import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    ActionsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  exports: [
    ActionsComponent,
  ],
})
export class HeadersModule { }
