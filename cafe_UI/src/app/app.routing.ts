import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppOwnerComponent } from './pages/appOwner/appOwner.component';
import { CafeOwnerComponent } from './pages/cafeOwner/cafeOwner.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes =[
      { path: 'appOwner',      component: AppOwnerComponent },
      { path: 'cafeOwner',      component: CafeOwnerComponent },
      { path: 'login',     component: LoginComponent },
      { path: 'signup',    component: SignupComponent },
      { path: '',          redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

