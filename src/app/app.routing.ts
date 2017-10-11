import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadItemsComponent } from './mod_common/load-items/load-items.component';
import { ReservationComponent } from './reservation/reservation.component';
const appRoutes: Routes = [
    
    { path: '', redirectTo: '/loadAccess', pathMatch: 'full' },
    { path: 'reservation',component:ReservationComponent },
    { path: 'loadAccess', component :LoadItemsComponent }
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRouting {}
