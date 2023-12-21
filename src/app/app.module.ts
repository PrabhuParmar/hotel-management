import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditHotelComponent } from './component/hotel/component/add-edit-hotel/add-edit-hotel.component';
import { ListHotelComponent } from './component/hotel/component/list-hotel/list-hotel.component';
import { BookHotelComponent } from './component/hotel/component/book-hotel/book-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditHotelComponent,
    ListHotelComponent,
    BookHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
