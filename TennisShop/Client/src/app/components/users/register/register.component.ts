import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../models/register-user.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterUser = new RegisterUser();
  message: string;
  success: boolean = true;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private toastrService: ToastrService
  ) { }
  // constructor() { }

  register() {
    console.log('Hello from register');
    console.log('user:', this.user);
    this.usersService.register(this.user)
    .subscribe(
      res => {
        console.log('response: ');
        console.log('response: ', res);
        // this.message = res['message'];
        // this.success = res['success'];
        // this.toastrService.success(res['message']);
        // this.router.navigateByUrl('/users/login');
        // this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        // this.message = err.error['message'];
        // this.success = err['success'];
        // this.toastrService.error(err.error['message']);
      }
    );
  }

  inputClick(inputFieldInfo) {
    console.log(inputFieldInfo);
  }

  ngOnInit() {
  }

}
