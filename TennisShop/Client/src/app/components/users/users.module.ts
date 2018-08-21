// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

// Components
import { userComponents } from '.';

// Services
import { UsersService } from './users.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
      ...userComponents,
    ],
    providers: [UsersService],
    exports: []
})

export class UserModule { }

