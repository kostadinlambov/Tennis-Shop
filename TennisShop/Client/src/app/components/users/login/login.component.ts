import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoginUser } from '../models/login-user.model';
import { Router } from '@angular/router';
import { DataSharingService } from '../../../core/services/app.data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user: LoginUser = new LoginUser();
message: string;
success: boolean = true;
username: string;

  constructor(
    private userService: UsersService,
    private router: Router,
    private dataSharingService: DataSharingService
  ) { }

  login() {
    this.userService.login(this.user)
    .subscribe(
      data =>   {
        console.log('login data: ', data);
        this.username = this.userService.getUsername();
        this.dataSharingService.isUserLoggedIn.next(this.username);
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
