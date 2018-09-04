import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacketModule } from './components/rackets/racket.module';
import { UserModule } from './components/users/users.module';
import { CategoryModule } from './components/categories/category.module';

import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'user', loadChildren: () => UserModule },
    { path: 'racket', loadChildren: () => RacketModule },
    { path: 'category', loadChildren: () => CategoryModule },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutesModule { }
