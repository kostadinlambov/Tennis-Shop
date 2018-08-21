import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { LoginUser } from '../models/login-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user: LoginUser = new LoginUser();
message: string;
success: boolean = true;

  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  login() {
    this.userService.login(this.user)
    .subscribe(
      data =>   {
        console.log('login data: ', data);
        // this.message = res['message'];
        // this.success = res['success'];
        // this.toastrService.success(data['message']);
        // this.successfulLogin(data);
        // this.router.navigate(['/home']);
      },
      err => {
        console.log('err: ', err);
        // this.message = err.error['message'];
        // this.success = err['success'];
        // this.toastrService.error(err.error['message']);
      }
    );
  }
}
