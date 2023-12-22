import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetHeaderService } from 'src/app/component/layout/service/set-header.service';
import { ValidationService } from 'src/app/component/shared/service/validation.service';
import { AuthenticationService } from '../../service/authentication.service';
import { AnimationService } from 'src/app/component/shared/service/animation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  animationShow: boolean = false;
  errMessage: string = '';

  constructor(private headerService: SetHeaderService, private router: Router, private validationService: ValidationService,
    private authService: AuthenticationService, private animation: AnimationService) {
    localStorage.setItem('loginStatus', 'false')
  };

  // set Login Form Data 
  loginFormData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,40}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), this.validationService.PasswordStrengthValidator])
  });

  ngOnDestroy(): void {
    this.headerService.login();
  }
  ngOnInit(): void {
    this.headerService.logOut();
    localStorage.setItem('loginStatus', 'false');
  }

  // submit login Details 
  submitData = () => {
    const result = this.authService.loginData.find((data) => {
      return this.loginFormData.value.email == data.email && this.loginFormData.value.password == data.password
    });
    this.animationShow = true;
    setTimeout(() => {
      if (result) {
        this.router.navigate(['hotel-list']);
        localStorage.setItem('loginStatus', 'true');
        this.authService.setRoleData.next(result.id);
        localStorage.setItem('loginId', result.id);
      }
      else {
        this.errMessage = 'Email or password is not valid'
      }
      this.loginFormData.reset();
      this.animationShow = false
    }, 2000)
  };

  // set error message 
  setLoginData = () => {
    this.errMessage = '';
  };

  // Animation path 
  AnimationOptions = {
    path: this.animation.animationPath
  };
}
