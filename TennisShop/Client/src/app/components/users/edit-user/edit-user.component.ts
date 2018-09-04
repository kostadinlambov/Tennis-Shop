import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../models/register-user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: RegisterUser;
  bindingModel: RegisterUser;
  id: string
  constructor(
    private route: ActivatedRoute,
    private userservice: UsersService,
    private router: Router,
    private ngProgress: NgProgress
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.ngProgress.start();
    this.userservice
      .getUserEditDetails(this.id)
      .subscribe(data => {
        debugger;
        console.log('bindingModel: ', data);
        this.user = data;
        this.ngProgress.done();
      });
  }

  edit() {
    debugger;
    this.userservice.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log('editUser: ', data);
        this.router.navigate([`/user/details/${this.id}`]);
      });
  }
}
