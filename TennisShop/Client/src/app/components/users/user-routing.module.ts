// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AllUserComponent } from "./all-user/all-user.component";
import { DetailsUserComponent } from "./details-user/details-user.component";
import { EditUserComponent } from './edit-user/edit-user.component';

// Guards
import { LoginAndRegisterGuard } from "../../core/guards/loginAndRegister.guard";
import { AuthGuard } from "../../core/guards/auth.guard";
import { AdminAuthGuard } from "../../core/guards/admin-auth.guard";
import { DeleteUserComponent } from "./delete-user/delete-user.component";

const userRoutes: Routes = [
    { path: 'register', component: RegisterComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'all', component: AllUserComponent, canActivate: [AdminAuthGuard, AuthGuard] },
    { path: 'details/:id', component: DetailsUserComponent, canActivate: [AdminAuthGuard, AuthGuard] },
    { path: 'edit/:id', component: EditUserComponent, canActivate: [AdminAuthGuard, AuthGuard] },
    { path: 'delete/:id', component: DeleteUserComponent, canActivate: [AdminAuthGuard, AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
