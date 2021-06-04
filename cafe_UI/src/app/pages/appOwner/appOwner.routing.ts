import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppOwnerComponent } from './appOwner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { MapsComponent } from './maps/maps.component';
import { LogoutComponent } from './logout/logout.component';

//import { TotalCafesService} from '../_services/index';

/** import { TypographyComponent } from './typography/typography.component'; **/
/** import { IconsComponent } from './icons/icons.component';*/
/** import { NotificationsComponent } from './notifications/notifications.component'; **/
/** import { UpgradeComponent } from './upgrade/upgrade.component'; **/

const routes: Routes =[
  { path: 'appOwner',  component: AppOwnerComponent,
      children: [
      { path: 'user-profile',   component: UserProfileComponent },
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'table-list',     component: TableListComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'logout',         component: LogoutComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  //  TotalCafesService,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class AppOwnerRoutingModule { }

