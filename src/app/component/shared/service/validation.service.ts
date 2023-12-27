import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // password Validation 
  PasswordStrengthValidator = (control: AbstractControl) => {
    let value: string = control.value || '';
    var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let special = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
    let number = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/;
    let lowerCase = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let upperCase = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    return special.test(value) == true || number.test(value) == true || lowerCase.test(value) == true || upperCase.test(value) == true || pattern.test(value) == true ? null : { passwordStrength: true }
  };

  // trim validation 
  trimValidation = (control: AbstractControl) => {
    return control.value !== null && control.value.trim() == '' ? { checkNameValue: true } : null;
  };

  // set Room price and Room Number 
  setRoomValidation = (control: AbstractControl) => {
    return control.value < 1 ? { roomStatus: true } : null;
  };

  // set Room Number 
  sameRoomNumberValidation = (control: AbstractControl, hotelRoomList: any) => {
    let checkRoomValue = hotelRoomList.value.some(function (hotel: { roomNumber: string; }) {
      return hotel.roomNumber === control.value;
    });

    return checkRoomValue == true ? { roomNumberMatch: true } : null;
  };

}
