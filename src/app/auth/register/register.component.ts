import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';

import { ICreateAccount } from '@interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showErrors = false;
  errors: string[] = [];
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  createAccount(data: ICreateAccount): void {
    this.authService.createAccount(data).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.errors = [];
        if (err.status === 400 && err.error.msg === 'email has already been registered') {
          this.showErrors = true;
          this.errors.push(`'${data.email}' no esta disponible, por favor ingrese otro correo`);
        }
      }
    });
  }
}
