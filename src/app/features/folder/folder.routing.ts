import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FolderComponent } from "./folder.component";
import { FolderGuard } from "@guards/folder.guard";

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
