import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { ICreateAccount } from '@interfaces/user.interface';

import CustomValidations from '@utils/custom-validations.util';
import { RegexClass } from '@utils/regex.util';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input() showErrors = false;
  @Input() errors: string[] = [];
  private regexExpressions = RegexClass;
  @Output() registerData: EventEmitter<ICreateAccount> = new EventEmitter<ICreateAccount>();
  registerForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern(this.regexExpressions.ONLY_TEXT),
    ]],
    surname: ['', [
      Validators.required,
      Validators.pattern(this.regexExpressions.ONLY_TEXT),
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(this.regexExpressions.EMAIL),
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(this.regexExpressions.PASSWORD),
    ]],
    confirmPassword: ['', [
      Validators.required,
    ]],
  }, {
    validators: CustomValidations.match('password', 'confirmPassword'),
  });
  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  validateForm(field: string): boolean | undefined | null {
    const myForm = this.registerForm.get(field);
    return myForm?.errors && (myForm?.dirty || myForm?.touched);
  }

  validateField(field: string, error: string): boolean | undefined | null {
    return (this.registerForm.get(field)?.hasError(error));
  }

  showPassword(id: string): void {
    const password = document.getElementById(id);
    const icon = document.getElementById(`${id}-icon`);
    if (password?.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
      icon?.classList.remove('bx-hide');
      icon?.classList.add('bx-show');
    }
    else {
      password?.setAttribute('type', 'password');
      icon?.classList.remove('bx-show');
      icon?.classList.add('bx-hide');
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.registerData.emit(this.registerForm.value);
    }
  }
}
