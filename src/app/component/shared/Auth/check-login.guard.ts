import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const checkLoginGuard: CanActivateFn = (route, state) => {
  // check user login Or not 
  const loginstatus: any = localStorage.getItem('loginStatus');
  let routers = inject(Router);
  let setRole = localStorage.getItem('loginId');
  const _toastr = inject(ToastrService);

  if (loginstatus === 'true') {
    if (state.url == '/hotel-list') {
      return true;
    }
    else if (setRole === 'admin') {
      if (state.url == '/add-edit-hotel') {
        return true;
      } else {
        _toastr.error('Only user can book hotel room');
        routers.navigate(['/hotel-list']);
        return false;
      };
    }
    else if (setRole == 'user') {
      if (state.url == '/book-hotel') {
        return true;
      } else {
        _toastr.error('Only admin can add and edit details');
        routers.navigate(['/hotel-list']);
        return false;
      };
    }
    else {
      routers.navigate(['login']);
      _toastr.error('Please login again');
      return false;
    }
  } else {
    routers.navigate(['login']);
    _toastr.error('Please login again');
    return false;
  };
};
