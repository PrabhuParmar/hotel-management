import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from 'src/app/app.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class AuthenticationModule { }
