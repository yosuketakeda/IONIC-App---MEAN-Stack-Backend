import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppOwnerModule } from './appOwner/appOwner.module';
import { CafeOwnerModule } from './cafeOwner/cafeOwner.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { routing } from './pages.routing';

import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, TotalCafesService } from './_services/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    AppOwnerModule,
    CafeOwnerModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    AlertComponent,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    TotalCafesService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider
    // provider used to create fake backend
    //fakeBackendProvider
  ],
})
export class PagesModule { }
