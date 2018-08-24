// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllUserComponent } from './all-user/all-user.component';

// Directives
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { NamesValidatorDirective } from './directives/names-validator.directive';
import { MatchPasswordValidatorDirective } from './directives/matchPassword-validator.directive';
import { DetailsUserComponent } from './details-user/details-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderQuantityValidatorDirective } from './directives/order-quantity-validator.directive';

export const userComponents = [
    RegisterComponent,
    LoginComponent,
    AllUserComponent,
    DetailsUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    UsernameValidatorDirective,
    PasswordValidatorDirective,
    NamesValidatorDirective,
    MatchPasswordValidatorDirective,
    OrderQuantityValidatorDirective,
    ShoppingCartComponent
];
