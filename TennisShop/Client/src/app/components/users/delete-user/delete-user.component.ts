import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsUserModel } from '../models/details-user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  currentItem: Observable<DetailsUserModel>;
  id: string
  constructor(
    private route: ActivatedRoute,
    private userservice: UsersService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    debugger;

    console.log('Delete Details User id: ', this.id);

    this.currentItem = this.userservice.getUserDetails(this.id);

        // this.userservice.getUserDetails(this.id)
        //   .subscribe(
        //     (item) => {
        //       this.currentItem = item;
        //       console.log('currentUser ', item);
        //     },
        //     (err) => console.log(err)
        //   );
  }


  deleteUser() {
    this.userservice.deleteUser(this.id).subscribe(
      res =>{
        console.log('Delete success: ', res);
        this.router.navigate(['/user/all']);
      } ,
      err => console.log(err)
    );
  }
}
