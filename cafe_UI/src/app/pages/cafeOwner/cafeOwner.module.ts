import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Cafe_ComponentsModule } from '../../cafe_components/cafe_components.module';
import { CafeOwnerRoutingModule } from './cafeOwner.routing';

import { CafeOwnerComponent } from './cafeOwner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//import { TableListComponent } from './table-list/table-list.component';
import { MapsComponent } from './maps/maps.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Cafe_ComponentsModule,
    CafeOwnerRoutingModule,
    RouterModule,
  ],
  declarations: [
    CafeOwnerComponent,
    UserProfileComponent,
    DashboardComponent,
  //  TableListComponent,
    MapsComponent,
    LogoutComponent,
   ]
})
export class CafeOwnerModule { }
