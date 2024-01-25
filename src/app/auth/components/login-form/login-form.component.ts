import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { ILogin } from '@interfaces/user.interface';

import { RegexClass } from '@utils/regex.util';
import Storage from '@utils/storage.util';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  private regexExpressions = RegexClass;
  @Input() showErrors = false;
  @Input() errors: string[] = [];
  @Output() loginData: EventEmitter<ILogin> = new EventEmitter<ILogin>();
  loginForm = this.fb.group({
    email: [Storage.getLocalStorage('email') || '', [
      Validators.required,
      Validators.pattern(this.regexExpressions.EMAIL),
    ]],
    password: ['', [
      Validators.required,
    ]],
    remember: [Storage.getLocalStorage('email') ? true : false],
  });

  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  validateForm(field: string): boolean | undefined | null {
    const myForm = this.loginForm.get(field);
    return myForm?.errors && (myForm?.dirty || myForm?.touched);
  }

  validateField(field: string, error: string): boolean | undefined | null {
    return (this.loginForm.get(field)?.hasError(error));
  }

  showPassword(id: string): void {
    const password = document.getElementById(id);
    const icon = document.getElementById(`${id}-icon`);
    if (password?.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
      icon?.classList.remove('bx-hide');
      icon?.classList.add('bx-show');
    } else {
      password?.setAttribute('type', 'password');
      icon?.classList.remove('bx-show');
      icon?.classList.add('bx-hide');
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginData.emit(this.loginForm.value);
    }
  }

  changeRemember(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.loginForm.patchValue({
      remember: checked
    });
  }
}
