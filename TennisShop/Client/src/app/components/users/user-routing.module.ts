// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AllUserComponent } from "./all-user/all-user.component";
import { DetailsUserComponent } from "./details-user/details-user.component";
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

// Guards
import { LoginAndRegisterGuard } from "../../core/guards/loginAndRegister.guard";
import { AuthGuard } from "../../core/guards/auth.guard";
import { AdminAuthGuard } from "../../core/guards/admin-auth.guard";
import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { LogsComponent } from "./logs/logs.component";

const userRoutes: Routes = [
    { path: 'register', component: RegisterComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginAndRegisterGuard] },
    { path: 'all', component: AllUserComponent, canActivate: [AdminAuthGuard, AuthGuard] },
    { path: 'details/:id', component: DetailsUserComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditUserComponent, canActivate: [AuthGuard] },
    { path: 'delete/:id', component: DeleteUserComponent, canActivate: [AdminAuthGuard, AuthGuard] },
    { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
    { path: 'logs', component: LogsComponent, canActivate: [AdminAuthGuard, AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
exports: [RouterModule]
})
export class UserRoutingModule { }
