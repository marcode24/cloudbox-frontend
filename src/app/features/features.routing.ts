import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "@guards/auth.guard";

import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.routing')
      .then(m => m.HomeRoutingModule),
  },
  {
    path: 'folder',
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./folder/folder.routing')
      .then(m => m.FolderRoutingModule)
  },
  {
    path: 'search',
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./search/search.routing')
      .then(m => m.SearchRoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesRoutingModule {}
