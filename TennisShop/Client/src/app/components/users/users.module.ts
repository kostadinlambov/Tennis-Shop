// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { MDBBootstrapModule, CardsFreeModule, WavesModule, ModalModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


// Components
import { userComponents } from '.';

// Services
import { UsersService } from './users.service';
import { OrderService } from './services/order.service';
import { LogsComponent } from './logs/logs.component';


@NgModule({
    imports: [
FormsModule,
        CommonModule,
        UserRoutingModule,
        MDBBootstrapModule,
        CardsFreeModule,
        ModalModule,
        InputsModule,
        ButtonsModule,
        WavesModule
    ],
    declarations: [
      ...userComponents,
    ],
    providers: [UsersService, OrderService],
    exports: [ShoppingCartComponent]
})

export class UserModule { }

