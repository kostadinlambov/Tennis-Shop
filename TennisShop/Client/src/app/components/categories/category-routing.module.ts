import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "../../core/guards/auth.guard";
import { AdminAuthGuard } from "../../core/guards/admin-auth.guard";
import { AllCategoryComponent } from "./all-category/all-category.component";


const categoryRoutes: Routes = [
    { path: 'all', component: AllCategoryComponent, canActivate: [AuthGuard, AdminAuthGuard]},
    // { path: 'create', component: CreateRacketComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    // { path: 'details/:id', component: DetailsRacketComponent, canActivate: [AuthGuard] },
    // { path: 'delete/:id', component: DeleteRacketComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    // { path: 'edit/:id', component: EditRacketComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    // { path: 'my', component: MyFurnitureComponent, canActivate: [AuthGuard] },
];


@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
