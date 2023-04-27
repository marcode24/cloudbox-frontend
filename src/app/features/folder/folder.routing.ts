import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FolderGuard } from "@guards/folder.guard";

import { FolderComponent } from "./folder.component";

const childRoutes: Routes = [
  {
    path: ':folderId',
    canActivate: [FolderGuard],
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
