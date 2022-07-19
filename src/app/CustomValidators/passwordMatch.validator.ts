import { AbstractControl } from "@angular/forms";

// Cross-field custom validator
export function passwordMatchValidator (control: AbstractControl) {
    const pass = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if(pass?.untouched || confirmPassword?.untouched)
        return null;

    return pass && confirmPassword && pass.value !== confirmPassword.value ? {passwordMismatch: true } : null;
  };