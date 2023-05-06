import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule as CoreComponentsModule } from '@components/components.module';

import { AuthComponent } from './auth.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    CoreComponentsModule
  ]
})
export class AuthModule { }
