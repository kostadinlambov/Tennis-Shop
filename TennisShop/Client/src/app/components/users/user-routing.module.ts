// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AllUserComponent } from "./all-user/all-user.component";

// Guards
import { LoginAndRegisterGuard } from "../../core/guards/loginAndRegister.guard";
import { AuthGuard } from "../../core/guards/auth.guard";
import { AdminAuthGuard } from "../../core/guards/admin-auth.guard";

const userRoutes: Routes = [
    { path: 'register', component: RegisterComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'all', component: AllUserComponent, canActivate: [AdminAuthGuard, AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
