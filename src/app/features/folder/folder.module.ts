import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeadersModule } from "@shared/headers/headers.module";
import { ModalsModule } from "@shared/modals/modals.module";

import { ComponentsModule } from "./components/components.module";
import { FolderComponent } from "./folder.component";

@NgModule({
  declarations: [
    FolderComponent,
  ],
  imports: [
    CommonModule,
    HeadersModule,
    ModalsModule,
    ComponentsModule
  ]
})
export class FolderModule {}
