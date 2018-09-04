import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../components/users/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/app.data-sharing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  dropdownLi: string = 'nav-item dropdown';
  dropdownMenu: string = 'dropdown-menu';
  username: string;
  userId: string;
  reload: boolean= true
  


  constructor(
    public userService: UsersService,
    private toastrService: ToastrService,
    private router: Router,
    private dataSharingService: DataSharingService
  ) {
    this.dataSharingService.isUserLoggedIn.subscribe(value => {
      this.username = value;
      this.userId = this.userService.getId();
    });

  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log(this.username);
    if (token) {
      debugger;
      this.username = this.userService.getUsername();
    }
  }


  logout(event: MouseEvent) {
    event.preventDefault();
    localStorage.clear();
    this.toastrService.info('You have been successfully logged out!');
    this.router.navigate(['/user/login']);
  }

  reloadSubscribe() {
    this.dataSharingService.reloadComponent.next(this.userId);
  }

  expand() {
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = 'nav-item dropdown'
      : this.dropdownLi = 'nav-item dropdown show';

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = 'dropdown-menu'
      : this.dropdownMenu = 'dropdown-menu show';
  }
}
