import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../../service/hotel.service';
import { AnimationService } from 'src/app/component/shared/service/animation.service';
import { ValidationService } from 'src/app/component/shared/service/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.css']
})
export class AddEditHotelComponent {
  hotelRoomList: any = new FormArray([]);
  numberOfRoom: number = 1;
  animationShow: boolean = false;


  constructor(private hotelService: HotelService, private animation: AnimationService, private validationService: ValidationService, private router: Router) {
    this.addControl(1);
  };

  // Hotel Form Details 
  hotelFormDetails: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^.*[a-zA-Z]+.*$'), this.validationService.trimValidation]),
    address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), this.validationService.trimValidation]),
    city: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), this.validationService.trimValidation]),
    state: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), this.validationService.trimValidation]),
    country: new FormControl('india', []),
    room: this.hotelRoomList,
    numberOfRooms: new FormControl(1),
  });

  // submit Form Details 
  submitHotelDetails = () => {
    this.animationShow = true;
    this.hotelService.onAddHotel(this.hotelFormDetails.value);
    setTimeout(() => {
      this.animationShow = false;
      this.hotelFormDetails.reset();
      this.numberOfRoom = 1;
      this.setRoomDetails(this.numberOfRoom);
      this.router.navigate(['hotel-list']);
    }, 2000);
    this.hotelFormDetails.patchValue({
      country: 'india',
    });
  };

  // roomnumber data send in validation service 
  checkRoomNumber = (control: AbstractControl) => {
    return this.validationService.sameRoomNumberValidation(control, this.hotelRoomList);
  };

  get roomDetails(): FormArray {
    return this.hotelFormDetails.get('room') as FormArray;
  };

  // room List Form Array 
  addControl = (item: number) => {
    this.hotelRoomList.push(new FormGroup({
      roomNumber: new FormControl('', [Validators.required, this.validationService.setRoomValidation, this.checkRoomNumber]),
      roomPrice: new FormControl('', [Validators.required, this.validationService.setRoomValidation]),
    }));
  };

  // remove Subject and marks 
  removeRoom = (index: number) => {
    this.roomDetails.removeAt(index);
    this.numberOfRoom -= 1;
  };

  // number of Room Increement
  roomIncreement = () => {
    this.numberOfRoom += 1;
    this.setRoomDetails(this.numberOfRoom);
  };

  // number of Room Decreement
  roomDecreement = () => {
    this.numberOfRoom -= 1;
    this.setRoomDetails(this.numberOfRoom);
  };

  // Set Room Input 
  setRoomDetails = (numberOfRoom: number) => {
    while (this.hotelRoomList.length > 0) {
      this.roomDetails.controls.pop();
      this.hotelRoomList.removeAt(0);
    };
    while (numberOfRoom > 0) {
      this.addControl(numberOfRoom);
      numberOfRoom--;
    };
  };

  // Animation path 
  AnimationOptions = {
    path: this.animation.animationPath
  };
};
