import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRoutingModule } from './hotel-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditHotelComponent } from './component/add-edit-hotel/add-edit-hotel.component';
import { ListHotelComponent } from './component/list-hotel/list-hotel.component';
import { BookHotelComponent } from './component/book-hotel/book-hotel.component';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from 'src/app/app.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddEditHotelComponent,
    ListHotelComponent,
    BookHotelComponent
  ],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgbTooltipModule

  ],
  providers: [HotelModule]
})
export class HotelModule { }
