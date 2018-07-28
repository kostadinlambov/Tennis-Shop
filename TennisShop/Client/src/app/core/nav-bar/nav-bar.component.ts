import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // !!!!!!!!!!!!!!!!!!
  // Use this implementation after implementing logout() in usersService.ts
  // logout() {
  //   this.userService.logout()
  //     .subscribe(data => {});
  // }

  logout() {

    localStorage.clear();
    this.userService.authtoken = '';
    this.toastrService.info('You have been successfully logged out!');
    // this.router.navigate(['/login']);


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
