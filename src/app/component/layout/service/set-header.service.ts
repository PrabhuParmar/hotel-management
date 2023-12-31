import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetHeaderService {

  loggedIn: BehaviorSubject<boolean> | undefined;

  constructor() {
    this.loggedIn = new BehaviorSubject<boolean>(true);
  };

  login = () => {
    this.loggedIn?.next(true);
  };
  logOut = () => {
    this.loggedIn?.next(false);
    localStorage.setItem('loginStatus', 'false');
  };



}
