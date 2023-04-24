import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';

import { ILogin } from '@interfaces/user.interface';

import Storage from '@utils/storage.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showErrors = false;
  errors: string[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(data: ILogin): void {
    this.authService.login(data).subscribe({
      next: () => {
        if (data.remember) Storage.savelocalStorage('email', data.email);
        else Storage.removeLocalStorage('email');

        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.errors = [];
        if (err.status === 400 && err.error.msg === 'email or password are incorrect') {
          this.showErrors = true;
          this.errors.push('correo o contraseña incorrectos');
        }
      }
    });
  }
}
