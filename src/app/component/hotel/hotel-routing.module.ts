import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditHotelComponent } from './component/add-edit-hotel/add-edit-hotel.component';
import { ListHotelComponent } from './component/list-hotel/list-hotel.component';
import { BookHotelComponent } from './component/book-hotel/book-hotel.component';
import { checkLoginGuard } from '../shared/Auth/check-login.guard';

const routes: Routes = [
    {
        path: 'add-edit-hotel',
        component: AddEditHotelComponent,
        canActivate: [checkLoginGuard]
    },
    {
        path: 'hotel-list',
        component: ListHotelComponent,
        canActivate: [checkLoginGuard],
    },
    {
        path: 'book-hotel',
        component: BookHotelComponent,
        canActivate: [checkLoginGuard],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AddEditRoutingModule { }
