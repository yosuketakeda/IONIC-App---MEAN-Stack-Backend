import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './_guards/index';

import { AppOwnerComponent } from './appOwner/appOwner.component';
import { CafeOwnerComponent } from './cafeOwner/cafeOwner.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'appOwner', component: AppOwnerComponent },
    { path: 'cafeOwner', component: CafeOwnerComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
