import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FolderComponent } from "./folder.component";

const childRoutes: Routes = [
  {
    path: ':folderId',
    component: FolderComponent
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
export class FolderRoutingModule {}
