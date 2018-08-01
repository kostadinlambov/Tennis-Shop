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
  dropdownLi: string = 'nav-item dropdown';
  dropdownMenu: string = 'dropdown-menu';

  constructor(
    private userService: UsersService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  logout(event: MouseEvent) {
    event.preventDefault();
    localStorage.clear();
    this.toastrService.info('You have been successfully logged out!');
    this.router.navigate(['/login']);
  }

  expand() {
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = 'nav-item dropdown'
      : this.dropdownLi = 'nav-item dropdown show';

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = 'dropdown-menu'
      : this.dropdownMenu = 'dropdown-menu show';
  }



  // !!!!!!!!!!!!!!!!!!
  // Use this implementation after implementing logout() in usersService.ts
  // logout() {
  //   this.userService.logout()
  //     .subscribe(data => {});
  // }


  logout1() {

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
