// Modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// Services
import { UsersService } from './users.service';

// Directives
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { NamesValidatorDirective } from './directives/names-validator.directive';
import { MatchPasswordValidatorDirective } from './directives/matchPassword-validator.directive';

@NgModule({
imports: [FormsModule, CommonModule],
declarations: [
    RegisterComponent,
    LoginComponent,
    UsernameValidatorDirective,
    PasswordValidatorDirective,
    NamesValidatorDirective,
    MatchPasswordValidatorDirective
],
providers: [UsersService],
exports: []
})

export class UserModule {}

