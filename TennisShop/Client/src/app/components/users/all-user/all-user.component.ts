import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUserModel } from '../models/all-user.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { allUserAnimations } from './all-user.animations';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
  animations: allUserAnimations
})
export class AllUserComponent implements OnInit {
  allUsers$: Observable<AllUserModel[]>;
  allUsers: AllUserModel[];
  users: Object;
  constructor(
    private userService: UsersService,
    private router: Router,
    private ngProgress: NgProgress,
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
    this.ngProgress.start();
    // this.allUsers$ = this.userService.getAll();
    this.userService.getAll().subscribe(
      res => {
        debugger;
        this.allUsers = res;
        this.ngProgress.done();
        console.log('allUsers res: ', res);
      },
      err => {
        debugger;
        console.log('allUsers error: ', err);
      });
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
