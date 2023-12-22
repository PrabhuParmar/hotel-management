import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  PasswordStrengthValidator = (control: AbstractControl) => {
    let value: string = control.value || '';
    var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let special = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
    let number = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/;
    let lowerCase = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let upperCase = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    return special.test(value) == true || number.test(value) == true || lowerCase.test(value) == true || upperCase.test(value) == true || pattern.test(value) == true ? null : { passwordStrength: true }
  };
}
