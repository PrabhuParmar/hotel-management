import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { HotelInterface } from 'src/app/component/shared/model/shared.model';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent {
  hotelDataList: HotelInterface[] = [];
  loginId!: string | any;
  constructor(private hotelListService: HotelService) {
    this.hotelDataList = hotelListService.hotelList;
    this.loginId = localStorage.getItem('loginId');
  };
}
