import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUserModel } from './all-user.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  allUsers: Observable<AllUserModel[]>;
  users: Object;
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUsers();
  }


  promote(id) {
    this.userService.promote(id).subscribe(
      res => {
        this.loadUsers();
        console.log('promote res: ', res);
      },
      err => console.log('promote Err: ', err)
    );
  }

  demote(id) {

    this.userService.demote(id).subscribe(
      res => {
        this.loadUsers();
        console.log('demote res: ', res);
      },
      err => console.log('demote Err: ', err)
    );
  }

  loadUsers() {
    this.allUsers = this.userService.getAll();
    // this.userService.getAll().subscribe(
    //   res => {
    //     debugger;
    //     console.log('allUsers res: ', res);
    //   },
    //   err => {
    //     debugger;
    //     console.log('allUsers error: ', err);
    //   });
  }

  isRoot(role) {
    if (role === 'ROOT') {
      return true;
    }

    return false;
  }

  isLoggedInUser(username) {
    const loggedInUserName = this.userService.getUsername();
    if (username === loggedInUserName) {
      return true;
    }
    return false;
  }
}
