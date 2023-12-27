import { Injectable } from '@angular/core';
import { HotelInterface } from '../../shared/model/shared.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelList: HotelInterface[] = [];
  // on add Hotel list 
  onAddHotel = (hotel: HotelInterface) => {
    let min = 100000;
    let max = 999999;
    let hostelId = Math.floor(Math.random() * (max - min + 1)) + min;

    this.hotelList.push({
      ...hotel,
      id: hostelId,
      numberOfRooms: hotel.room.length,
    });
  };
};
