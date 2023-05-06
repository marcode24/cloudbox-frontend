import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipesModule } from '@pipes/pipes.module';

import { HeaderComponent } from './header/header.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    HeaderAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HeaderAuthComponent
  ]
})
export class ComponentsModule { }
