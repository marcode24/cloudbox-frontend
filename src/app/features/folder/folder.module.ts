import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeadersModule } from "@shared/headers/headers.module";
import { LoadersModule } from "@shared/loaders/loaders.module";
import { ModalsModule } from "@shared/modals/modals.module";
import { TablesModule } from "@shared/tables/tables.module";

import { FolderComponent } from "./folder.component";

@NgModule({
  declarations: [
    FolderComponent,
  ],
  imports: [
    CommonModule,
    HeadersModule,
    ModalsModule,
    LoadersModule,
    TablesModule,
  ]
})
export class FolderModule {}
