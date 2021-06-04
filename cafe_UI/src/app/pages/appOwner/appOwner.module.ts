import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { AppOwnerRoutingModule } from './appOwner.routing';

import { AppOwnerComponent } from './appOwner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { MapsComponent } from './maps/maps.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    AppOwnerRoutingModule,
    RouterModule,
  ],
  declarations: [
    AppOwnerComponent,
    UserProfileComponent,
    DashboardComponent,
    TableListComponent,
    MapsComponent,
    LogoutComponent,
   ]
})
export class AppOwnerModule { }
