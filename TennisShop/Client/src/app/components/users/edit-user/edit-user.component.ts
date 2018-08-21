import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './../models/register-user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../users.service';

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
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.userservice
      .getUserEditDetails(this.id)
      .subscribe(data => {
        debugger;
        console.log('bindingModel: ', data);
        this.user = data;
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
