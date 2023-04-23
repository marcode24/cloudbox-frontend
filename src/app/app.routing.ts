import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { FeaturesRoutingModule } from './features/features.routing';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FeaturesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
