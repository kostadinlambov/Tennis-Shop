import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AllFurnitureComponent } from "./all-furniture/all-furniture.component";
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './my-furniture/my-furniture.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { DeleteFurnitureComponent } from "./delete-furniture/delete-furniture.component";
import { AuthGuard } from "../../core/guards/auth.guard";

const furnitureRoutes: Routes =   [
    { path: 'all', component: AllFurnitureComponent },
    { path: 'create', component: CreateFurnitureComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: FurnitureDetailsComponent, canActivate: [AuthGuard] },
    { path: 'my', component: MyFurnitureComponent, canActivate: [AuthGuard] },
    { path: 'delete/:id', component: DeleteFurnitureComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditFurnitureComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [
    RouterModule.forChild(furnitureRoutes)
    ],
    exports: [RouterModule]

})
export class FurnitureRoutingModule { }
