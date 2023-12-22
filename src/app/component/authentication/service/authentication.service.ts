import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // user login Array
  loginData = [
    {
      email: 'admin@ownai.com',
      password: 'Admin@123',
      id: 'admin'
    },
    {
      email: 'aman@lemontree.com',
      password: 'Aman@LemonTree',
      id: 'user',
    }
  ];
  // set Role 
  setRoleData = new Subject<any>()
}
