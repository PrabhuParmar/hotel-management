import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/component/header/header.component';
import { AuthenticationModule } from './component/authentication/authentication.module';
import { HotelModule } from './component/hotel/hotel.module';
import { LottieModule } from 'ngx-lottie';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HotelModule,
    LottieModule.forRoot({ player: playerFactory }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [provideAnimations(), provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
