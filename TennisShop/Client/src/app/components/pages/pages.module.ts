import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule, WavesModule, CardsFreeModule, ModalModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';

@NgModule({
    imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
    WavesModule,
    CardsFreeModule,
    ModalModule,
    InputsModule,
    ButtonsModule
    ],
    declarations: [
        HomeComponent,
        PageNotFoundComponent,
        CreateCarFormComponent
    ],
    providers: [],
    exports: []
})
export class PagesModule { }
