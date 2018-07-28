import { Component } from '@angular/core';
import { UsersService } from './../users.service';
import { LoginUser } from './login-user.model';
import { Router } from '../../../../node_modules/@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService
  ) { }

  login() {
    this.userService.login(this.user)
    .subscribe(
      data => {
        console.log(data);
        // this.message = res['message'];
        // this.success = res['success'];
        this.toastrService.success(data['message']);
        // this.router.navigateByUrl('');
        this.successfulLogin(data);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
        // this.message = err.error['message'];
        // this.success = err['success'];
        this.toastrService.error(err.error['message']);
      }
    );
  }

  private successfulLogin(data) {
    this.userService.authtoken = data['token'];
    localStorage.setItem('authtoken', data['token']);
    localStorage.setItem('username', data['user']['name']);
    // this.router.navigate(['/home']);
  }
}
