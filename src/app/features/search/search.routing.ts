import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchComponent } from "./search.component";

const childRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class SearchRoutingModule {}
