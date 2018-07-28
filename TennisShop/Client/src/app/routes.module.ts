import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './core/guards/auth.guard';
import { LoginAndRegisterGuard } from './core/guards/loginAndRegister.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginAndRegisterGuard] },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class CarRoutesModule { }
