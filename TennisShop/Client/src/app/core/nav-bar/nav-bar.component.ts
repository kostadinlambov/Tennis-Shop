import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  logout() {

    localStorage.clear();
    this.userService.authtoken = '';
    this.toastrService.info('You have been successfully logged out!');

    // debugger;
    // this.userService.logout()
    //   .subscribe(data => {

    //     localStorage.clear();
    //     this.userService.authtoken = '';
    //     this.toastrService.info('You have been successfully logged out!');
    //     // this.router.navigate(['/login']);
    //   });
  }

}
