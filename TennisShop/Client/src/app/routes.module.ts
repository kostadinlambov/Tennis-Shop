import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureModule } from './components/furniture/furniture.module';
import { RacketModule } from './components/rackets/racket.module';
import { UserModule } from './components/users/users.module';
import { CategoryModule } from './components/categories/category.module';

import { AuthGuard } from './core/guards/auth.guard';

import { CreateCarFormComponent } from './components/pages/create-car-form/create-car-form.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'car/create', component: CreateCarFormComponent, canActivate: [AuthGuard] },
    { path: 'user', loadChildren: () => UserModule },
    { path: 'furniture', loadChildren: () => FurnitureModule },
    { path: 'racket', loadChildren: () => RacketModule },
    { path: 'category', loadChildren: () => CategoryModule },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutesModule { }
