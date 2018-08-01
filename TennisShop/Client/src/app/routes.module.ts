import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateCarFormComponent } from './pages/create-car-form/create-car-form.component';

import { AuthGuard } from './core/guards/auth.guard';
import { LoginAndRegisterGuard } from './core/guards/loginAndRegister.guard';
import { AllFurnitureComponent } from './furniture/all-furniture/all-furniture.component';
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './furniture/my-furniture/my-furniture.component';
import { DeleteFurnitureComponent } from './furniture/delete-furniture/delete-furniture.component';
import { EditFurnitureComponent } from './furniture/edit-furniture/edit-furniture.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'car/create', component: CreateCarFormComponent, canActivate: [AuthGuard] },
    {
        path: 'furniture', children:
            [
                { path: 'all', component: AllFurnitureComponent },
                { path: 'create', component: CreateFurnitureComponent, canActivate: [AuthGuard] },
                { path: 'details/:id', component: FurnitureDetailsComponent, canActivate: [AuthGuard] },
                { path: 'my', component: MyFurnitureComponent, canActivate: [AuthGuard] },
                { path: 'delete/:id', component: DeleteFurnitureComponent, canActivate: [AuthGuard] },
                { path: 'edit/:id', component: EditFurnitureComponent, canActivate: [AuthGuard] },
            ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CarRoutesModule { }
