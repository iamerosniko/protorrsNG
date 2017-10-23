import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadItemsComponent } from './mod_common/load-items/load-items.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
const appRoutes: Routes = [
    
    { path: '', redirectTo: '/reservation', pathMatch: 'full' },
    { path: 'reservation',component:ReservationComponent },
    { path: 'reserved-users',component:RegisteredUsersComponent },
    { path: 'loadAccess', component :LoadItemsComponent },
    {path:'**',redirectTo:'/reservation'}
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRouting {}
