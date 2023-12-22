import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRoutingModule } from './hotel-routing.module';
import { AuthenticationService } from '../authentication/service/authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddEditRoutingModule
  ],
  providers: [AuthenticationService]
})
export class HotelModule { }
