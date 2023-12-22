import { Component, OnDestroy } from '@angular/core';
import { SetHeaderService } from '../../service/set-header.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/component/authentication/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  headerShow: boolean | any = true
  subscription: Subscription | any;
  setRole!: string | any;
  constructor(private headerService: SetHeaderService, private authService: AuthenticationService) {
    this.subscription = headerService.loggedIn?.subscribe((data) => {
      this.headerShow = data
    });
    this.setRole = localStorage.getItem('loginId');
    authService.setRoleData.subscribe((data) => {
      this.setRole = data
    });
  };
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  onLogout = () => {
    localStorage.setItem('loginStatus', 'false');
  };
}
