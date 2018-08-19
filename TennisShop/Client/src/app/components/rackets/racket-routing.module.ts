import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AllRacketComponent } from "./all-racket/all-racket.component";
import { CreateRacketComponent } from "./create-racket/create-racket.component";
import { DetailsRacketComponent } from "./details-racket/details-racket.component";
import { DeleteRacketComponent } from "./delete-racket/delete-racket.component";
import { EditRacketComponent } from "./edit-racket/edit-racket.component";

import { AuthGuard } from "../../core/guards/auth.guard";


const racketRoutes: Routes = [
    { path: 'all', component: AllRacketComponent },
    { path: 'create', component: CreateRacketComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: DetailsRacketComponent, canActivate: [AuthGuard] },
    { path: 'delete/:id', component: DeleteRacketComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditRacketComponent, canActivate: [AuthGuard] },
    // { path: 'my', component: MyFurnitureComponent, canActivate: [AuthGuard] },
];


@NgModule({
    imports: [RouterModule.forChild(racketRoutes)],
    exports: [RouterModule]
})
export class RacketRoutingModule { }
