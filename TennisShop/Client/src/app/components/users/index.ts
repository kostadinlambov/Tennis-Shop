// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllUserComponent } from './all-user/all-user.component';

// Directives
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { NamesValidatorDirective } from './directives/names-validator.directive';
import { MatchPasswordValidatorDirective } from './directives/matchPassword-validator.directive';

export const userComponents = [
   RegisterComponent,
   LoginComponent,
    AllUserComponent,
    UsernameValidatorDirective,
    PasswordValidatorDirective,
    NamesValidatorDirective,
    MatchPasswordValidatorDirective,
];
