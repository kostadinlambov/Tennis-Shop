import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureModule } from './components/furniture/furniture.module';
import { RacketModule } from './components/rackets/racket.module';
import { UserModule } from './components/users/users.module';

import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { LoginAndRegisterGuard } from './core/guards/loginAndRegister.guard';

import { CreateCarFormComponent } from './components/pages/create-car-form/create-car-form.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    // { path: 'register', component: RegisterComponent, canActivate: [LoginAndRegisterGuard] },
    // { path: 'login', component: LoginComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'car/create', component: CreateCarFormComponent, canActivate: [AuthGuard] },
    { path: 'user', loadChildren: () => UserModule },
    { path: 'furniture', loadChildren: () => FurnitureModule },
    { path: 'racket', loadChildren: () => RacketModule },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }
